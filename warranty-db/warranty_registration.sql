DROP TABLE IF EXISTS warranty_db.warranty_registration CASCADE;

CREATE TABLE warranty_db.warranty_registration
  (
    id UUID NOT NULL DEFAULT uuid_generate_v4(),
    title TEXT,
		f_name TEXT NOT NULL,
		l_name TEXT NOT NULL,
		dob DATE NOT NULL,
		email TEXT NOT NULL,
		mobile TEXT NOT NULL,
		purchase_date TIMESTAMP NOT NULL DEFAULT now(),
		serial UUID NOT NULL,

    CONSTRAINT warranty_registration_id_pk PRIMARY KEY (id),
    CONSTRAINT warranty_registration_serial_uq UNIQUE (serial),
    CONSTRAINT warranty_registration_serial_fk FOREIGN KEY (serial)
            REFERENCES warranty_db.warranty_serial (serial) MATCH FULL
  );

ALTER TABLE warranty_db.warranty_serial
  OWNER to morhaf;

INSERT INTO warranty_db.warranty_registration
  (
    f_name,
    l_name,
    dob,
    email,
    mobile,
    serial
  ) VALUES
  (
    'Morhaf',
    'Shamia',
    '1992-08-17',
    'inmogr@msn.com',
    '+601111931173',
    '12bbe7ee-1e54-4db3-9053-7bd499eb95f7'
  )
  ;
