drop view if exists jobs_likes_view;

create view jobs_likes_view as
    select jobs.id, jobs.title, likes.user_id, likes.job_id,
        resumes.summary, resumes.skills_certs, resumes.languages,
        resumes.cultural, users.first_name, users.last_name
        from jobs join likes on jobs.id = likes.job_id join
        resumes on likes.user_id = resumes.user_id join
        users on resumes.user_id = users.id;