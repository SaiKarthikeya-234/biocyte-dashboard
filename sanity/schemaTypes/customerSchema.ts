import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'object',
            fields: [
                defineField({
                    name: 'street',
                    title: 'Street',
                    type: 'string',
                }),
                defineField({
                    name: 'city',
                    title: 'City',
                    type: 'string',
                }),
                defineField({
                    name: 'state',
                    title: 'State',
                    type: 'string',
                }),
                defineField({
                    name: 'zipCode',
                    title: 'Zip Code',
                    type: 'string',
                }),
            ],
        }),
    ],
});