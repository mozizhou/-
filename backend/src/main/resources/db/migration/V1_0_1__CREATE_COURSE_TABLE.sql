create table user_access.user
(
  id           bigserial    not null,
  username         varchar(20)  ,
  password     varchar(100) not null,
  name         text         not null,
  gender       int          not null default 0,
  is_admin     int  not null,
  birthday     timestamp(3),
  phone_num    varchar(15),
  home_address text,
  constraint user_pk PRIMARY KEY (id),
  constraint username_unique unique (username)
);

create table user_access.post
(
  id           bigserial    not null,
  user_id      bigserial    not null,
  title      text    not null,
  content      text         not null,
  type        int  not null default 0,
  create_time  timestamp not null ,
  comment_count int  not null default 0,
  constraint post_pk PRIMARY KEY (id)
);

create table user_access.schedule
(
  id                bigserial    not null,
  userId            bigserial   not null,
  schedule_date     date         not null,
  food_morning    bigserial    not null,
  sign_morning      int          not null default 0,
  food_noon       bigserial    not null,
  sign_noon         int          not null default 0,
  food_afternoon  bigserial    not null,
  sign_afternoon    int          not null default 0,
  fix               bigserial    not null,
  sign_fix          int          not null default 0,
  constraint schedule_pk PRIMARY KEY (id)
);

create table user_access.comment
(
  id           bigserial    not null,
  post_id      bigserial    not null,
  user_id      bigserial    not null,
  content      text         not null,
  comment_time timestamp    not null ,
  constraint comment_pk PRIMARY KEY (id)
);

create table user_access.food_menu
(
    id           bigserial    not null,
    code         text,
    name         varchar         not null,
    description  text         not null,
    price        bigserial    not null,
    quantity     bigserial,
    inventoryStatus    text,
    category     text,
    image        text,
    rating       bigserial    not null,
    constraint food_menu_pk PRIMARY KEY (id)
);

create table user_access.food_menu_user
(
    id           bigserial    not null,
    user_id      bigserial    not null,
    menu_id      bigserial    not null,
    update_time  timestamp not null ,
    constraint food_menu_user_pk PRIMARY KEY (id)
);
