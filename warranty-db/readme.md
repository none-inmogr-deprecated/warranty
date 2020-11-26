# Setup Database with Docker

## CREATE CONTAINER

    docker run --rm \
    --name warranty-db \
    -e POSTGRES_USER=morhaf \
    -e POSTGRES_PASSWORD=morhaf \
    -d \
    -p 5432:5432 \
    -v $PWD/volume:/var/lib/postgresql/data \
    postgres

## CONNECT TO THE DB SERVER

    psql -h localhost -U morhaf

## CREATE THE DATABASE

    CREATE DATABASE warranty_db;

## CONNECT TO THE DB SERVER THEN TO THE DATABASE

    psql -h localhost -U morhaf -d warranty_db

## CREATE THE DATABASE EXTENSION FOR UUID

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

## CREATE THE DATABASE SCHEMA

    CREATE SCHEMA warranty_db;

## CREATED THE TABLES AND INSERT SAMPLE DATA

    Please use the provided SQL scripts to add the data to the database
    First use the `warranty_serial.sql` then the `warranty_registration.sql`
