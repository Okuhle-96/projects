drop table if exists multi_basket CASCADE;
create table multi_basket ( 
  id serial not null primary key,
  multi_fruit_name text
);

drop table if exists multi_basket_items CASCADE;
create table multi_basket_items ( 
  id serial not null primary key,
  fruit_name text, 
  quantity int, 
  price decimal (10,2),
  multi_fruit_basket_id int,
  foreign key (multi_fruit_basket_id) references multi_basket(id)
);

insert into multi_basket (multi_fruit_name) values ('Apple');
insert into multi_basket (multi_fruit_name) values ('Banana');
insert into multi_basket (multi_fruit_name) values ('Kiwi');
insert into multi_basket (multi_fruit_name) values ('Paw Paw');

insert into multi_basket_items (fruit_name, quantity, price, multi_fruit_basket_id) 
                  values ('Golden Apple', 2, 2.00, 1);
insert into multi_basket_items (fruit_name, quantity, price, multi_fruit_basket_id) 
                  values ('Banana', 3, 4.00, 2);
insert into multi_basket_items (fruit_name, quantity, price, multi_fruit_basket_id) 
                  values ('Bombaya', 4, 8.00, 3);
insert into multi_basket_items (fruit_name, quantity, price, multi_fruit_basket_id) 
                  values ('Papaya', 1, 20.00, 4);