-- Add onboarded column to profiles if it doesn't already exist
do $$
begin
  if not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'profiles'
      and column_name  = 'onboarded'
  ) then
    alter table public.profiles
    add column onboarded boolean not null default false;
  end if;
end $$;
