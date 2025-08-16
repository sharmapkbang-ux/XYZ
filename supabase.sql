create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  streak int default 0,
  readiness int default 0,
  goal_confidence int default 0,
  created_at timestamptz default now()
);

create table if not exists public.goals (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  role_key text not null,
  created_at timestamptz default now()
);

create table if not exists public.pathways (
  id uuid primary key default uuid_generate_v4(),
  role_key text not null,
  kind text default 'safe',
  provider text not null,
  timeline text,
  fee numeric default 0,
  currency text default 'USD',
  end_outcome text,
  modules text[] default '{}',
  provider_link text
);

create table if not exists public.coaches (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  specialty text,
  rate numeric,
  rating numeric,
  bio text,
  image_path text,
  calendly text
);

create table if not exists public.provider_stats (
  id int primary key default 1,
  views int default 0,
  clicks int default 0,
  enrollments int default 0
);

alter table profiles enable row level security;
alter table goals enable row level security;

create policy "read own profile" on profiles for select using (auth.uid() = id);
create policy "update own profile" on profiles for update using (auth.uid() = id);
create policy "insert own profile" on profiles for insert with check (auth.uid() = id);

create policy "read own goals" on goals for select using (auth.uid() = user_id);
create policy "insert own goals" on goals for insert with check (auth.uid() = user_id);

alter table pathways disable row level security;
alter table coaches disable row level security;
alter table provider_stats disable row level security;

-- Seeds
insert into pathways (role_key, kind, provider, timeline, fee, currency, end_outcome, modules, provider_link) values
('data_analyst','safe','Google Data Analytics (Coursera)','6 months (10 hrs/week)',0,'USD/month','Google Data Analytics Certificate', array['Foundations','Ask Questions','Prepare Data','Analyze with R','Capstone'], 'https://www.coursera.org/professional-certificates/google-data-analytics'),
('data_analyst','fast','SQL Essential Training (LinkedIn Learning)','3 weeks (3 hrs/week)',0,'USD/month','Certificate (trial)', array['Intro to SQL','Aggregations','Joins','Subqueries'], 'https://www.linkedin.com/learning/sql-essential-training'),
('data_analyst','budget','Excel for Data Analysis (edX - IBM)','4 weeks (4 hrs/week)',0,'USD','Verified Skill Badge', array['Excel Basics','Cleaning','Pivots','Dashboards'], 'https://www.edx.org/course/excel-for-data-analysis');

insert into coaches (name, specialty, rate, rating, bio, image_path, calendly) values
('Asha Rao','Data Career Coach',35,4.8,'ICF coach focusing on analytics career pivots.','/team1.svg','https://calendly.com/'),
('Vikram Sen','Product & PM Coach',45,4.7,'Helps frame projects and interview prep.','/team2.svg','https://calendly.com/'),
('Maya Patel','Resilience Coach',40,4.9,'Motivation, accountability, burnout prevention.','/team1.svg','https://calendly.com/');
