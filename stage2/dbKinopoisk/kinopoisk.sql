create table person
(
    id   serial
        constraint person_pk
            primary key,
    name varchar(255)
);

alter table person
    owner to admin;

create table main_role
(
    id        serial
        constraint main_role_pk
            primary key,
    person_id integer not null
        constraint main_role_person_id_fk
            references person
);

alter table main_role
    owner to admin;

create table dup_role
(
    id        serial
        constraint dup_role_pk
            primary key,
    person_id integer
        constraint dup_role_person_id_fk
            references person
);

alter table dup_role
    owner to admin;

create table film
(
    id               serial
        constraint film_pk
            primary key,
    title            text     not null,
    director_id      integer
        constraint film_person_id_fk
            references person,
    scenario_id      integer
        constraint film_person_id_fk2
            references person,
    producer_id      integer
        constraint film_person_id_fk3
            references person,
    operator_id      integer
        constraint film_person_id_fk4
            references person,
    composer_id      integer
        constraint film_person_id_fk5
            references person,
    painter_id       integer
        constraint film_person_id_fk6
            references person,
    montage_id       integer
        constraint film_person_id_fk7
            references person,
    budget           money    not null,
    fees_world       money    not null,
    premier          date     not null,
    viewing_age      smallint not null,
    duration_minutes integer  not null
);

alter table film
    owner to admin;

create table genre
(
    id            serial
        constraint genre_pk
            primary key,
    name_of_genre varchar(255) not null,
    film_id       integer
        constraint genre_film_id_fk
            references film
);

alter table genre
    owner to admin;

create table audience
(
    id            serial
        constraint audience_pk
            primary key,
    country       text    not null,
    count_of_view bigint  not null,
    film_id       integer not null
        constraint audience_film_id_fk
            references film
);

alter table audience
    owner to admin;

create table main_dup_role
(
    id           serial
        constraint main_dup_role_pk
            primary key,
    main_role_id integer not null
        constraint main_dup_role_main_role_id_fk
            references main_role,
    role_dup_id  integer not null
        constraint main_dup_role_dup_role_id_fk
            references dup_role,
    film_id      integer not null
        constraint main_dup_role_film_id_fk
            references film
);

alter table main_dup_role
    owner to admin;