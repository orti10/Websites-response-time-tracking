CREATE DATABASE domainsrecords;

CREATE TABLE domain(
  domain_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  response_time FLOAT
);