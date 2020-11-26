import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { WarrantyRegistrationCreateRequest } from "./warranty-registration-request";

@Entity({ name: "warranty_registration" })
export class WarrantyRegistrationCreateModel extends BaseEntity {
    constructor(data?: WarrantyRegistrationCreateRequest) {
        super();
        if (data) {
            this.title = data.title || null;
            this.fName = data.fName;
            this.lName = data.lName;
            this.dob = data.dob;
            this.email = data.email;
            this.mobile = data.mobile;
            this.serial = data.serial;
        }
    }

    @PrimaryGeneratedColumn({ name: "id", type: "uuid" })
    id!: string;

    @Column({ name: "title", type: "text", nullable: true })
    title!: string | null;

    @Column({ name: "f_name" })
    fName!: string;

    @Column({ name: "l_name" })
    lName!: string;

    @Column({ name: "dob", type: "date" })
    dob!: string;

    @Column({ name: "email" })
    email!: string;

    @Column({ name: "mobile" })
    mobile!: string;

    @Column({ name: "purchase_date", type: "date", nullable: true })
    purchaseDate!: string | null;

    @Column({ name: "serial", type: "uuid" })
    serial!: string;
}
