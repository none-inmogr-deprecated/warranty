DROP TABLE IF EXISTS warranty_db.warranty_serial CASCADE;

CREATE TABLE warranty_db.warranty_serial
  (
    id UUID NOT NULL DEFAULT uuid_generate_v4(),
		serial UUID NOT NULL DEFAULT uuid_generate_v4(),
		product_name TEXT NOT NULL,

    CONSTRAINT warranty_serial_id_pk PRIMARY KEY (id),
    CONSTRAINT warranty_serial_serial_uq UNIQUE (serial)
  );

ALTER TABLE warranty_db.warranty_serial
  OWNER to morhaf;

INSERT INTO warranty_db.warranty_serial
  (
    serial,
    product_name
  )
  VALUES
  (
    '12bbe7ee-1e54-4db3-9053-7bd499eb95f7',
    'My Example Product Name 00'
  )
  ;

INSERT INTO warranty_db.warranty_serial (product_name) VALUES
  ('My Example Product Name 01'),
  ('My Example Product Name 02'),
  ('My Example Product Name 03'),
  ('My Example Product Name 04'),
  ('My Example Product Name 05'),
  ('My Example Product Name 06'),
  ('My Example Product Name 07'),
  ('My Example Product Name 08'),
  ('My Example Product Name 09'),
  ('My Example Product Name 10'),
  ('My Example Product Name 11'),
  ('My Example Product Name 12'),
  ('My Example Product Name 13'),
  ('My Example Product Name 14'),
  ('My Example Product Name 15'),
  ('My Example Product Name 16'),
  ('My Example Product Name 17'),
  ('My Example Product Name 18'),
  ('My Example Product Name 19'),
  ('My Example Product Name 20')
  ;
