export default {
    name: 'product',
    title: 'Produtos Brechó',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Imagem',
            description: 'Imagens do produto',
            type: 'array',
            of: [{ type: 'image' }],
            option: {
                hotspot: 'true',
            }
        },
        {
            name: 'name',
            title: 'Nome',
            description: 'Nome do produto',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Categoria',
            description: 'Categoria da peça, especificar se é calça, camisa etc',
            type: 'string',
            options: {
                list: [
                    { title: 'Camiseta', value: 'shirt' },
                    { title: 'Boné', value: 'cap' },
                    { title: 'Calça', value: 'pants' },
                    { title: 'Shorts', value: 'shorts' },
                    { title: 'Acessório', value: 'acessories' },
                ]

            }
        },
        {
            name: 'size',
            title: 'Tamanho',
            description: 'Tamanho da peça(pp,p,m,g,gg)',
            type: 'string',
        },

        {
            name: 'slug',
            title: 'Slug (produto/"slug")',
            description: 'Nome dps da barra no url ex: https://ruadebaixo.com/produtos/camiseta-poggers',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Preço',
            description: 'preço do produto',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Detalhes',
            description: 'Descrição do produto, medida da cintura, tipo de tecido etc...',
            type: 'string',
        }
    ]
}