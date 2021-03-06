/* eslint-disable */
export const categories = [
    {
        id      : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        parentId: null,
        name    : 'Mens',
        slug    : 'mens'
    },
    {
        id      : '07986d93-d4eb-4de1-9448-2538407f7254',
        parentId: null,
        name    : 'Ladies',
        slug    : 'ladies'
    },
    {
        id      : 'ad12aa94-3863-47f8-acab-a638ef02a3e9',
        parentId: null,
        name    : 'Unisex',
        slug    : 'unisex'
    }
];
export const brands = [
    {
        id  : 'e1789f32-9475-43e7-9256-451d2e3a2282',
        name: 'Benton',
        slug: 'benton'
    },
    {
        id  : '61d52c2a-8947-4a2c-8c35-f36baef45b96',
        name: 'Capmia',
        slug: 'capmia'
    },
    {
        id  : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        name: 'Lara',
        slug: 'lara'
    },
    {
        id  : '5913ee46-a497-41db-a118-ee506011529f',
        name: 'Premera',
        slug: 'premera'
    },
    {
        id  : '2c4d98d8-f334-4125-9596-862515f5526b',
        name: 'Zeon',
        slug: 'zeon'
    }
];
export const tags = [
    {
        id   : '167190fa-51b4-45fc-a742-8ce1b33d24ea',
        title: 'mens'
    },
    {
        id   : '3baea410-a7d6-4916-b79a-bdce50c37f95',
        title: 'ladies'
    },
    {
        id   : '8ec8f60d-552f-4216-9f11-462b95b1d306',
        title: 'unisex'
    },
    {
        id   : '8837b93f-388b-43cc-851d-4ca8f23f3a61',
        title: '44mm'
    },
    {
        id   : '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
        title: '40mm'
    },
    {
        id   : '2300ac48-f268-466a-b765-8b878b6e14a7',
        title: '5 ATM'
    },
    {
        id   : '0b11b742-3125-4d75-9a6f-84af7fde1969',
        title: '10 ATM'
    },
    {
        id   : '0fc39efd-f640-41f8-95a5-3f1d749df200',
        title: 'automatic'
    },
    {
        id   : '7d6dd47e-7472-4f8b-93d4-46c114c44533',
        title: 'chronograph'
    },
    {
        id   : 'b1286f3a-e2d0-4237-882b-f0efc0819ec3',
        title: 'watch'
    }
];
export const vendors = [
    {
        id  : '987dd10a-43b1-49f9-bfd9-05bb2dbc7029',
        name: 'Evel',
        slug: 'evel'
    },
    {
        id  : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        name: 'Mivon',
        slug: 'mivon'
    },
    {
        id  : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        name: 'Neogen',
        slug: 'neogen'
    }
];
export const products = [
   
    {
        id         : '6e71be88-b225-474c-91e5-111ced7d6220',
        category   : '07986d93-d4eb-4de1-9448-2538407f7254',
        name       : 'Pedido Maderas de Lino',
        description: '',
        tags       : [
            '3baea410-a7d6-4916-b79a-bdce50c37f95',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8f868ddb-d4a2-461d-bc3b-d7c8668687c3',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : '004_00012',
        barcode    : '8268777127281',
        brand      : '5913ee46-a497-41db-a118-ee506011529f',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 12,
        reserved   : 5,
        cost       : 738.91,
        basePrice  : 1848,
        taxPercent : 30,
        price      : 336,
        weight     : 0.54,
        active     : false
    },
    {
        id         : '51242500-6983-4a78-bff3-d278eb4e3a57',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Maderas Santana',
        description: '',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '0fc39efd-f640-41f8-95a5-3f1d749df200',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '0b11b742-3125-4d75-9a6f-84af7fde1969',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : '004_00013',
        barcode    : '8452763551765',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '998b0c07-abfd-4ba3-8de1-7563ef3c4d57',
        stock      : 24,
        reserved   : 4,
        cost       : 688.89,
        basePrice  : 1502,
        taxPercent : 8,
        price      : 552,
        weight     : 0.76,
        active     : true
    },
    {
        id         : '844a4395-233f-4ffb-85bd-7baa0e490a88',
        category   : 'b899ec30-b85a-40ab-bb1f-18a596d5c6de',
        name       : 'Cajas de Madera',
        description: '',
        tags       : [
            '167190fa-51b4-45fc-a742-8ce1b33d24ea',
            '7d6dd47e-7472-4f8b-93d4-46c114c44533',
            '8837b93f-388b-43cc-851d-4ca8f23f3a61',
            '2300ac48-f268-466a-b765-8b878b6e14a7',
            'b1286f3a-e2d0-4237-882b-f0efc0819ec3'
        ],
        sku        : '004_00015',
        barcode    : '8385907318041',
        brand      : 'f9987124-7ada-4b93-bef7-35280b3ddbd7',
        vendor     : '05ebb527-d733-46a9-acfb-a4e4ec960024',
        stock      : 44,
        reserved   : 3,
        cost       : 708.41,
        basePrice  : 1467,
        taxPercent : 18,
        price      : 1236,
        weight     : 0.7,
        active     : false
    }
];
