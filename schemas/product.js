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
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Nome',
            description: 'Nome do produto',
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
            name: 'details',
            title: 'Detalhes',
            description: 'Descrição do produto, medida da cintura, tipo de tecido etc...',
            type: 'string',
        },
        {
            name: 'quality',
            title: 'Qualidade',
            description: 'Qualidade da peça',
            type: 'string',
            options: {
                list: [
                    { title: 'Usado', value: '1' },
                    { title: 'Semi-novo', value: '2' },
                    { title: 'Novo', value: '3' }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'category',
            title: 'Categoria',
            description: 'Categoria da peça, especificar se é calça, camisa etc',
            type: 'string',
            options: {
                list: [
                    { title: 'Camiseta',value: 'Camiseta' },
                    { title: 'Boné',value: 'Boné' },
                    { title: 'Calça',value: 'Calça' },
                    { title: 'Shorts',value: 'Shorts' },
                    { title: 'Acessório',value: 'Acessório' },
                ]

            }
        },
        {
            name: 'size',
            title: 'Tamanho',
            description: 'Tamanho da peça(pp,p,m,g,gg)',
            type: 'string',
            validation: Rule =>
                Rule.uppercase().error('Somente letras em maíusculo')
        },
        {
            name: 'price',
            title: 'Preço',
            description: 'preço do produto',
            type: 'number',
        }
    ]
}
