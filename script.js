// Catálogo completo de productos por marca
const catalogoProductos = {
    'Benevia': [
        { nombre: 'Push Pop', descripcion: 'Caramelo con palo' },
        { nombre: 'Push Pop Duo', descripcion: 'Caramelo doble sabor' },
        { nombre: 'Ring Pop', descripcion: 'Caramelo en anillo' },
        { nombre: 'Mentos', descripcion: 'Caramelos masticables' },
        { nombre: 'FunDipperz', descripcion: 'Caramelo para mojar' },
        { nombre: 'Spring Pop', descripcion: 'Caramelo con resorte' },
        { nombre: 'GODipperz', descripcion: 'Caramelo líquido' },
        { nombre: 'One Bite', descripcion: 'Chocolate de un bocado' },
        { nombre: 'Barras de Chocolate', descripcion: 'Chocolate en barra' }
    ],
    'Verizzia': [
        { nombre: 'Pastas Verizzia', descripcion: 'Pastas de calidad premium' },
        { nombre: 'Legumbres Verizzia', descripcion: 'Legumbres seleccionadas' },
        { nombre: 'Harinas Verizzia', descripcion: 'Harinas 000 y 0000' }
    ],
    'Fantoche': [
        { nombre: 'Alfajor Triple Blanco 85g', descripcion: 'Alfajor relleno de dulce de leche y baño de merengue' },
        { nombre: 'Alfajor Triple Negro 85g', descripcion: 'Alfajor relleno de dulce de leche y baño de repostería' },
        { nombre: 'Simple Night 50g', descripcion: 'Alfajor sabor chocolate con dulce de leche y baño de repostería' },
        { nombre: 'Simple Day 50g', descripcion: 'Alfajor relleno con dulce de leche cubierto con baño de merengue italiano' },
        { nombre: 'XS Negro 25g', descripcion: 'Alfajor relleno de dulce de leche y baño de repostería' },
        { nombre: 'XS Blanco 25g', descripcion: 'Alfajor relleno con dulce de leche cubierto con baño de merengue italiano' },
        { nombre: 'XS Rosé 25g', descripcion: 'Alfajor con baño de merengue italiano sabor a Tutti frutti, frambuesa y limón' },
        { nombre: 'Mini Cunitas Chocolate 150g', descripcion: 'Ideales para compartir - 6 unidades x paquete' },
        { nombre: 'Mini Cunitas Blanco 150g', descripcion: 'Ideales para compartir - 6 unidades x paquete' },
        { nombre: 'Alfajor Elixir Super Dulce de Leche 70g', descripcion: 'Alfajor Super Dulce de leche con Tapas bañadas en chocolate' },
        { nombre: 'Alfajor Elixir Blanco 60g', descripcion: 'Alfajor con dulce de leche con cobertura de chocolate blanco' },
        { nombre: 'Alfajor Elixir 70% Cacao 60g', descripcion: 'Alfajor con Dulce de leche con cobertura de chocolate 70% cacao' },
        { nombre: 'Horóscopo 300g', descripcion: 'Galletitas para tortas de chocolate' },
        { nombre: 'Horóscopo Tubo 240g', descripcion: 'Horóscopo en presentación tubo' },
        { nombre: 'Pepas Fantoche 350g', descripcion: 'Galletitas con Membrillo' },
        { nombre: 'Espumita 300g', descripcion: 'Galletitas con miel, ideales para acompañar el café' },
        { nombre: 'Marmoladas 350g', descripcion: 'Un exquisito mix entre chocolate y vainilla' },
        { nombre: 'Tapitas 350g', descripcion: 'Tapitas de alfajores con estilo tradicional' },
        { nombre: 'Galletitas Yayitas 275g', descripcion: 'Vainilla y Chip de chocolate' },
        { nombre: 'Yayita Black 250g', descripcion: 'Galletitas de chocolate negro con pepas de chocolate con leche' },
        { nombre: 'Dulce de Leche 450g', descripcion: 'Ideal para comer a cucharadas, desayunos, rellenar alfajores ó postres' },
        { nombre: 'Chocolatada Fantoche 200ml', descripcion: 'Con pack sustentable, para desayunos y meriendas' },
        { nombre: 'Bizcochitos 200g', descripcion: 'Super crocantes y sabrosos. ¡Para acompañar tus mates!' },
        { nombre: 'Butter Bakery 150g', descripcion: 'Galletitas dulces sabor manteca' },
        { nombre: 'Choco Bakery 150g', descripcion: 'Galletitas dulces sabor chocolate' },
        { nombre: 'Bocadito 28g', descripcion: 'Bocadito relleno con dulce de leche con baño de chocolate semiamargo' },
        { nombre: 'Budín Sin Fruta 220g', descripcion: 'Budín simple, sin frutas' },
        { nombre: 'Budín Con Fruta 220g', descripcion: 'Budín con frutas' },
        { nombre: 'Budín Con Pepas de Chocolate 220g', descripcion: 'Budín con pepas de chocolate' },
        { nombre: 'Budín Marmolado 220g', descripcion: 'Budín marmolado' },
        { nombre: 'Pan Dulce Sin Frutas 500g', descripcion: 'Pan dulce simple, sin frutas' },
        { nombre: 'Pan Dulce Marmolado 400g', descripcion: 'Pan dulce veneciano marmolado' },
        { nombre: 'Panettone 600g', descripcion: 'Postre tradicional de Navidad en Milán' },
        { nombre: 'Pan Dulce Con Pepas de Chocolate 400g', descripcion: 'Pan dulce con pepas de chocolate' },
        { nombre: 'Pan Milanés Con Frutas y Masa Madre 500g', descripcion: 'Pan dulce milanés hecho con masa madre' },
        { nombre: 'Pan Dulce Con Frutas 500g', descripcion: 'Pan dulce con frutas' },
        { nombre: 'Pan Dulce Con Frutas 400g', descripcion: 'Pan dulce con frutas' },
        { nombre: 'Almendras Bañadas de Chocolate 80g', descripcion: 'Almendras con cobertura de chocolate' },
        { nombre: 'Pasas de Uva Bañadas de Chocolate 80g', descripcion: 'Pasas de uva con cobertura de chocolate' },
        { nombre: 'Chispas de Chocolate', descripcion: 'Vainilla con chispas de chocolate' },
        { nombre: 'Chispas de Chocolate Tubo', descripcion: 'Vainilla con chispas de chocolate en tubo' },
        { nombre: 'Oblea Big 28g', descripcion: 'Oblea rellenas con crema de limón con baño de repostería semiamargo' },
        { nombre: 'Chocodonas 120g', descripcion: 'Galletitas mini donas de limón y vainilla cubierto con baño de repostería' },
        { nombre: 'Café Mood Booster', descripcion: 'Cápsulas de Café sabor a dulce de leche y vainilla. Intensidad 4. Estuche x 10' },
        { nombre: 'Café Cloud Coffee', descripcion: 'Cápsulas de Café tradicional expreso. Intensidad 4. Estuche x 10' }
    ],
    'Sweet (Open Candy)': [
        { nombre: 'Tribala Frambuesa 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Frutimania Crunch Frambuesa 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Frutimania Crunch Frutilla 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Frutimania Crunch Uva 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Frutimania Crunch Yogur de Frutilla 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Masticable Métrico Cremosito 24cm', descripcion: 'Caramelos masticables - 24 unidades' },
        { nombre: 'Masticable Open Candy Nitro 24cm', descripcion: 'Caramelos masticables - 24 unidades' },
        { nombre: 'Masticable Open Candy Métrico Frutilla 24cm', descripcion: 'Caramelos masticables - 24 unidades' },
        { nombre: 'Masticable Open Candy Métrico Tutti Frutti 24cm', descripcion: 'Caramelos masticables - 24 unidades' },
        { nombre: 'Tribala Frutilla 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Tribala 2 Frutas 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Tribala Uva 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Masticable Frutomila Relleno 500g', descripcion: 'Caramelos blandos - 100 unidades' },
        { nombre: 'Masticable Comefuego Surtido', descripcion: 'Caramelos - 50 unidades' },
        { nombre: 'Drink Candy', descripcion: 'Caramelos líquidos' },
        { nombre: 'Chupetín Blong Relleno Chicle Ácido 28g', descripcion: 'Chupetines con chicle - 24 unidades' },
        { nombre: 'Chupetín Blong Relleno Chicle Blueberry 28g', descripcion: 'Chupetines con chicle - 24 unidades' },
        { nombre: 'Chupetín Blong Relleno Chicle Cereza 28g', descripcion: 'Chupetines con chicle - 24 unidades' },
        { nombre: 'Chupetín Blong Relleno Chicle Frutilla 28g', descripcion: 'Chupetines con chicle - 24 unidades' },
        { nombre: 'Chupetín Masticable Fierita Lengua Azul 12g', descripcion: 'Chupetines masticables - 50 unidades' },
        { nombre: 'Chupetín Masticable Fierita Super Tatoo Menta 12g', descripcion: 'Chupetines masticables - 50 unidades' },
        { nombre: 'Chupetín Masticable Cremosito 12g', descripcion: 'Sabor frutilla y crema - 50 unidades' },
        { nombre: 'Chupetín Masticable Fierita Nitro 12g', descripcion: 'Chupetines masticables - 50 unidades' },
        { nombre: 'Chupetín Open Candy Emo 5g', descripcion: 'Chupetines varios - 80 unidades' },
        { nombre: 'Chupetín Open Candy Patita 4g', descripcion: 'Chupetines varios - 100 unidades' },
        { nombre: 'Bel Nuevo Estuche Surtido', descripcion: 'Chocolates rellenos - 20 unidades' },
        { nombre: 'Bocadito Bel Yogur/Leche/Frutilla/Chocolate', descripcion: 'Bombones y bocaditos - 50 unidades' },
        { nombre: 'Barrita Bel Leche Condensada 13g', descripcion: 'Bombones - 36 unidades' },
        { nombre: 'Barrita Bel Moranguete Frutilla 13g', descripcion: 'Bombones - 36 unidades' },
        { nombre: 'Barrita Bel Yogurte 13g', descripcion: 'Bombones - 36 unidades' },
        { nombre: 'Moneda Chocolate Bel 370g', descripcion: 'Monedas de chocolate - 100 unidades' },
        { nombre: 'Trento Avellana 32g', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Trento Chocolate Blanco', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Trento Chocolate', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Trento Dark Blanco 32g', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Trento Momentos 192g', descripcion: 'Chocolates rellenos surtidos' },
        { nombre: 'Trento Crema 32g', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Trento Massimo Chocolate 30g', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Trento Massimo Chocolate Blanco 30g', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Trento Massimo Crema Maní 30g', descripcion: 'Chocolates rellenos - 16 unidades' },
        { nombre: 'Chicle Fierita Open Candy Menta 3g', descripcion: 'Chicles globo - 100 unidades' },
        { nombre: 'Chicle Fierita Open Candy Tutti 3g', descripcion: 'Chicles globo - 100 unidades' },
        { nombre: 'Chicle Fierita Open Candy Frutilla 3g', descripcion: 'Chicles globo - 100 unidades' },
        { nombre: 'Chicle Fierita Open Candy Banana 3g', descripcion: 'Chicles globo - 100 unidades' },
        { nombre: 'Chicle Fierita Open Candy Uva 3g', descripcion: 'Chicles globo - 100 unidades' },
        { nombre: 'Chicle Fierita Recargado Menta', descripcion: 'Chicles confitados - 50 unidades' },
        { nombre: 'Chicle Fierita Recargado Tutti Fruti', descripcion: 'Chicles confitados - 50 unidades' },
        { nombre: 'Chicle Fierita Recargado Uva', descripcion: 'Chicles confitados - 50 unidades' },
        { nombre: 'Chicle Fierita Recargado Frutilla', descripcion: 'Chicles confitados - 50 unidades' },
        { nombre: 'Chicle Fierita Recargado Banana', descripcion: 'Chicles confitados - 50 unidades' },
        { nombre: 'Goma Fierita Button 500g', descripcion: 'Gomitas' },
        { nombre: 'Goma Fierita Clásica 500g', descripcion: 'Gomitas' },
        { nombre: 'Goma Fierita Corazón 500g', descripcion: 'Gomitas' },
        { nombre: 'Goma Fierita Gajos 500g', descripcion: 'Gomitas' },
        { nombre: 'Goma Fierita Yogurt 500g', descripcion: 'Gomitas' },
        { nombre: 'Aros de Fresa Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Bananas Fini 250g', descripcion: 'Gomitas' },
        { nombre: 'Besos Fini 250g', descripcion: 'Gomitas' },
        { nombre: 'Besos Fresa Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Dentadura Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Gusanos Fini 250g', descripcion: 'Gomitas' },
        { nombre: 'Lombrices Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Lombrices Fini Ácidas 500g', descripcion: 'Gomitas' },
        { nombre: 'Marshmallow Alborada Fini 250g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallow Alborada Fini 500g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallows Corazón Fini 250g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallows Corazón Fini 500g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallows Flor Fini 250g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallows Flor Fini 500g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallows Fresas Fini 500g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallows Twist Fini 250g', descripcion: 'Marshmallows' },
        { nombre: 'Marshmallows Twist Fini 500g', descripcion: 'Marshmallows' },
        { nombre: 'Mini Besos Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Mini Minhoca Cítrica Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Mini Moras Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Mini Osos Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Mini Plátanos Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Moras Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Osos Fini 250g', descripcion: 'Gomitas' },
        { nombre: 'Osos Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Plátanos Fini 500g', descripcion: 'Gomitas' },
        { nombre: 'Tubes Fini Fresa 240g', descripcion: 'Regaliz' },
        { nombre: 'Tubes Fini Fresa Cítrico 240g', descripcion: 'Regaliz' },
        { nombre: 'Tubes Fini Twister 240g', descripcion: 'Regaliz' },
        { nombre: 'Tubes Fini Twister Cítrico 240g', descripcion: 'Regaliz' },
        { nombre: 'Estrellitas Frutales', descripcion: 'Pastillas - 100 unidades' }
    ],
    'Lipo': [
        { nombre: 'Caramelos de Miel Lipo (Rellenos) 800g', descripcion: 'Caramelos de miel rellenos sin TACC' },
        { nombre: 'Caramelos Lipo Dor (Menta con Chocolate) 907g', descripcion: 'Caramelos de menta con chocolate' },
        { nombre: 'Caramelos Gajitos Ácidos de Lipo 484g', descripcion: 'Caramelos ácidos sin TACC' },
        { nombre: 'Chupetines Wamis Mágico de Lipo', descripcion: 'Chupetines sin TACC - Bolsa x 50 unidades' },
        { nombre: 'Chupetines Lipo Wamis Sabor Dulce de Leche', descripcion: 'Chupetines sin TACC - Bolsa x 50 unidades' },
        { nombre: 'Caramelos de Menta de Lipo 907g', descripcion: 'Caramelos de menta sin TACC' },
        { nombre: 'Caramelos de Cereza Azucarados de Lipo 907g', descripcion: 'Caramelos de cereza sin TACC' },
        { nombre: 'Caramelos Ce Leche "Dulce de Leche" 907g', descripcion: 'Caramelos sin TACC de Lipo' },
        { nombre: 'Chupetines Frutales Wamis', descripcion: 'Chupetines sin TACC - Bolsa x 50 unidades' },
        { nombre: 'Caramelo Praliné de Lipo 907g', descripcion: 'Caramelos Praliné' },
        { nombre: 'Caramelos Superácidos de Lipo 907g', descripcion: 'Caramelos superácidos sin TACC' },
        { nombre: 'Caramelos Candy 10 de Lipo 810g', descripcion: 'Caramelos símil Media Hora sin TACC' },
        { nombre: 'Caramelos Viena Rellenos de Lipo 907g', descripcion: 'Caramelos rellenos sin TACC' }
    ],
    'Cerealko': [
        { nombre: 'Arrocitas Galletas de Arroz Cuadradas', descripcion: 'Galletas de Arroz Integral - Reemplazá el pan' },
        { nombre: 'MiniArrocitas Snacks de Arroz', descripcion: 'Snacks saludables ideal para comer a cualquier hora' },
        { nombre: 'Nachos Macritas Snacks de Maíz', descripcion: 'Tortillas a base de cereales integrales horneadas y fritas' },
        { nombre: 'Arrocitas Tostaditas de Arroz Integral', descripcion: 'Nuevos deliciosos snack de arroz integral libres de grasas trans' },
        { nombre: 'Arrocitas Superbarra de Arroz', descripcion: 'Golosina saludable mucho más grande y con más sabor' },
        { nombre: 'MiniArrocitas Alfajorcitos de Arroz', descripcion: 'Golosina saludable sin TACC con tan solo 58 kCal' },
        { nombre: 'Macrobiótica Galletas Discos de Arroz', descripcion: 'Tradicional línea de Galletas de Arroz Integral' }
    ]
};

// Inicialización de datos de prueba en localStorage
function initializeDemoData() {
    if (!localStorage.getItem('sinergia_initialized')) {
        // Guardar catálogo de productos
        localStorage.setItem('sinergia_catalogo', JSON.stringify(catalogoProductos));
        
        // Usuarios (admin y clientes) - ahora con 12 clientes
        const usuarios = [
            {
                id: 1,
                username: 'admin',
                password: 'admin123',
                tipo: 'admin',
                nombre: 'Marcelo Busso',
                email: 'marcelo@sinergiacomercial.com'
            },
            {
                id: 2,
                username: 'cliente1',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Juan Pérez',
                empresa: 'Mayorista Norte',
                email: 'juan@mayoristanorte.com',
                telefono: '381-1234567',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString() // 6 meses atrás
            },
            {
                id: 3,
                username: 'cliente2',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'María González',
                empresa: 'Supermercado Central',
                email: 'maria@supercentral.com',
                telefono: '381-7654321',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString() // 3 meses atrás
            },
            {
                id: 4,
                username: 'cliente3',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Carlos Rodríguez',
                empresa: 'Distribuidora Sur',
                email: 'carlos@distrisur.com',
                telefono: '381-9876543',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString() // 1.5 meses atrás
            },
            {
                id: 5,
                username: 'cliente4',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Ana Martínez',
                empresa: 'Comercial Este',
                email: 'ana@comercialeste.com',
                telefono: '381-5551234',
                aprobado: false,
                fechaRegistro: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 días atrás
            },
            {
                id: 6,
                username: 'cliente5',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Roberto Silva',
                empresa: 'Almacén Centro',
                email: 'roberto@almacencentro.com',
                telefono: '381-5559876',
                aprobado: false,
                fechaRegistro: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() // 5 días atrás
            },
            {
                id: 7,
                username: 'cliente6',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Laura Fernández',
                empresa: 'Kiosco La Esquina',
                email: 'laura@kioscola.com',
                telefono: '381-5554567',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString() // 4 meses atrás
            },
            {
                id: 8,
                username: 'cliente7',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Diego Morales',
                empresa: 'Supermercado del Valle',
                email: 'diego@supervalle.com',
                telefono: '381-6667890',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString() // 6.5 meses atrás
            },
            {
                id: 9,
                username: 'cliente8',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Sofía Ramírez',
                empresa: 'Distribuidora El Progreso',
                email: 'sofia@elprogreso.com',
                telefono: '381-7778901',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString() // 5 meses atrás
            },
            {
                id: 10,
                username: 'cliente9',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Fernando López',
                empresa: 'Mayorista San Martín',
                email: 'fernando@sanmartin.com',
                telefono: '381-8889012',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString() // 2 meses atrás
            },
            {
                id: 11,
                username: 'cliente10',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Patricia Díaz',
                empresa: 'Comercial La Unión',
                email: 'patricia@launion.com',
                telefono: '381-9990123',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() // 1 mes atrás
            },
            {
                id: 12,
                username: 'cliente11',
                password: 'pass123',
                tipo: 'cliente',
                nombre: 'Ricardo Torres',
                empresa: 'Almacén Mayorista del Norte',
                email: 'ricardo@almacennorte.com',
                telefono: '381-1112234',
                aprobado: true,
                fechaRegistro: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString() // 3.3 meses atrás
            }
        ];

        // Pedidos con diferentes fechas y más variedad
        const pedidos = [
            {
                id: 1,
                pedidoId: 'PED-1735123840123-A8K2M',
                clienteId: 2,
                clienteNombre: 'Juan Pérez',
                marca: 'Fantoche',
                producto: 'Alfajor Triple Blanco 85g',
                cantidad: 50,
                unidad: 'cajas',
                observaciones: 'Descuento 5% por volumen',
                fecha: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Pagado'
            },
            {
                id: 2,
                pedidoId: 'PED-1736234951234-B3L9N',
                clienteId: 2,
                clienteNombre: 'Juan Pérez',
                marca: 'Sweet (Open Candy)',
                producto: 'Tribala Frutilla 500g',
                cantidad: 100,
                unidad: 'unidades',
                observaciones: '',
                fecha: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Pagado'
            },
            {
                id: 3,
                pedidoId: 'PED-1737345062345-C4M1P',
                clienteId: 3,
                clienteNombre: 'María González',
                marca: 'Cerealko',
                producto: 'Arrocitas Galletas de Arroz Cuadradas',
                cantidad: 75,
                unidad: 'cajas',
                observaciones: 'Entrega urgente',
                fecha: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Facturado'
            },
            {
                id: 4,
                pedidoId: 'PED-1738456173456-D5N2Q',
                clienteId: 3,
                clienteNombre: 'María González',
                marca: 'Fantoche',
                producto: 'Dulce de Leche 450g',
                cantidad: 120,
                unidad: 'unidades',
                observaciones: '',
                fecha: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Pagado'
            },
            {
                id: 5,
                pedidoId: 'PED-1739567284567-E6P3R',
                clienteId: 4,
                clienteNombre: 'Carlos Rodríguez',
                marca: 'Fantoche',
                producto: 'Pan Dulce Con Frutas 500g',
                cantidad: 30,
                unidad: 'cajas',
                observaciones: 'Para fin de año',
                fecha: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Pagado'
            },
            {
                id: 6,
                pedidoId: 'PED-1738890395678-F7Q4S',
                clienteId: 8,
                clienteNombre: 'Diego Morales',
                marca: 'Benevia',
                producto: 'Mentos',
                cantidad: 200,
                unidad: 'paquetes',
                observaciones: 'Enviar a sucursal principal',
                fecha: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'En Proceso'
            },
            {
                id: 7,
                pedidoId: 'PED-1738901506789-G8R5T',
                clienteId: 9,
                clienteNombre: 'Sofía Ramírez',
                marca: 'Lipo',
                producto: 'Caramelos de Miel Lipo (Rellenos) 800g',
                cantidad: 80,
                unidad: 'bolsas',
                observaciones: '',
                fecha: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Pagado'
            },
            {
                id: 8,
                pedidoId: 'PED-1739012617890-H9S6U',
                clienteId: 10,
                clienteNombre: 'Fernando López',
                marca: 'Verizzia',
                producto: 'Pastas Verizzia',
                cantidad: 150,
                unidad: 'cajas',
                observaciones: 'Cliente mayorista - precio especial',
                fecha: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Pagado'
            },
            {
                id: 9,
                pedidoId: 'PED-1739123728901-I1T7V',
                clienteId: 11,
                clienteNombre: 'Patricia Díaz',
                marca: 'Sweet (Open Candy)',
                producto: 'Trento Chocolate 32g',
                cantidad: 60,
                unidad: 'displays',
                observaciones: '',
                fecha: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Facturado'
            },
            {
                id: 10,
                pedidoId: 'PED-1739234839012-J2U8W',
                clienteId: 12,
                clienteNombre: 'Ricardo Torres',
                marca: 'Fantoche',
                producto: 'Galletitas Yayitas 275g',
                cantidad: 90,
                unidad: 'cajas',
                observaciones: 'Reposición de stock',
                fecha: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'Pendiente'
            }
        ];

        // Vencimientos de facturas - más ejemplos con diferentes estados
        const vencimientos = [
            {
                id: 1,
                clienteId: 2,
                clienteNombre: 'Juan Pérez',
                factura: 'FC-001-00123',
                monto: 25000,
                fechaVencimiento: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pendiente' // Vence en 5 días
            },
            {
                id: 2,
                clienteId: 3,
                clienteNombre: 'María González',
                monto: 18500,
                factura: 'FC-001-00124',
                fechaVencimiento: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pendiente' // Vence en 2 días
            },
            {
                id: 3,
                clienteId: 4,
                clienteNombre: 'Carlos Rodríguez',
                factura: 'FC-001-00125',
                monto: 32000,
                fechaVencimiento: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pendiente' // Vence en 15 días
            },
            {
                id: 4,
                clienteId: 8,
                clienteNombre: 'Diego Morales',
                factura: 'FC-001-00126',
                monto: 45000,
                fechaVencimiento: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
                fechaPago: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pagada' // Pagada hace 22 días
            },
            {
                id: 5,
                clienteId: 9,
                clienteNombre: 'Sofía Ramírez',
                factura: 'FC-001-00127',
                monto: 27500,
                fechaVencimiento: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pendiente' // Vence en 8 días
            },
            {
                id: 6,
                clienteId: 10,
                clienteNombre: 'Fernando López',
                factura: 'FC-001-00128',
                monto: 38900,
                fechaVencimiento: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
                fechaPago: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pagada' // Pagada hace 50 días
            },
            {
                id: 7,
                clienteId: 11,
                clienteNombre: 'Patricia Díaz',
                factura: 'FC-001-00129',
                monto: 21000,
                fechaVencimiento: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pendiente' // Vence en 3 días
            },
            {
                id: 8,
                clienteId: 12,
                clienteNombre: 'Ricardo Torres',
                factura: 'FC-001-00130',
                monto: 52000,
                fechaVencimiento: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(),
                estado: 'pendiente' // Vence en 20 días
            }
        ];

        localStorage.setItem('sinergia_usuarios', JSON.stringify(usuarios));
        localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
        localStorage.setItem('sinergia_vencimientos', JSON.stringify(vencimientos));
        localStorage.setItem('sinergia_initialized', 'true');
    }
}

// Llamar a la inicialización al cargar la página
initializeDemoData();

let currentUser = null;

// Funciones de Modal
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('register-modal').style.display = 'none';
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
}

function showRegisterModal() {
    document.getElementById('register-modal').style.display = 'flex';
    document.getElementById('login-modal').style.display = 'none';
}

function closeRegisterModal() {
    document.getElementById('register-modal').style.display = 'none';
}

// Manejo de Login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const user = usuarios.find(u => u.username === username && u.password === password);

    if (!user) {
        alert('Usuario o contraseña incorrectos');
        return;
    }

    if (user.tipo === 'cliente' && !user.aprobado) {
        alert('Tu cuenta está pendiente de aprobación. Por favor espera a que el administrador apruebe tu registro.');
        return;
    }

    currentUser = user;
    closeLoginModal();
    document.getElementById('landing-page').style.display = 'none';

    if (user.tipo === 'admin') {
        showAdminDashboard();
    } else {
        showClientPortal();
    }
}

// Manejo de Registro
function handleRegister(event) {
    event.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    
    const username = document.getElementById('reg-username').value;
    if (usuarios.find(u => u.username === username)) {
        alert('El nombre de usuario ya está en uso');
        return;
    }

    const nuevoUsuario = {
        id: usuarios.length + 1,
        username: username,
        password: document.getElementById('reg-password').value,
        tipo: 'cliente',
        nombre: document.getElementById('reg-nombre').value,
        empresa: document.getElementById('reg-empresa').value,
        email: document.getElementById('reg-email').value,
        telefono: document.getElementById('reg-telefono').value,
        aprobado: false,
        fechaRegistro: new Date().toISOString()
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('sinergia_usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso. Tu cuenta está pendiente de aprobación por el administrador.');
    closeRegisterModal();
    document.getElementById('register-form').reset();
}

// Logout
function logout() {
    currentUser = null;
    document.getElementById('admin-dashboard').style.display = 'none';
    document.getElementById('client-portal').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
    document.getElementById('btn-portal').style.display = 'none';
    document.querySelector('.btn-login').style.display = 'block';
}

// Volver al sitio (sin cerrar sesión)
function backToSite() {
    document.getElementById('admin-dashboard').style.display = 'none';
    document.getElementById('client-portal').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
    
    // Mostrar botón "Mi Portal" en navbar
    document.getElementById('btn-portal').style.display = 'inline-block';
    document.querySelector('.btn-login').style.display = 'none';
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ir al portal desde el sitio
function goToPortal() {
    if (!currentUser) return;
    
    document.getElementById('landing-page').style.display = 'none';
    
    if (currentUser.tipo === 'admin') {
        showAdminDashboard();
    } else {
        showClientPortal();
    }
}

// Dashboard Administrador
function showAdminDashboard() {
    document.getElementById('admin-dashboard').style.display = 'block';
    showAdminSection('alertas');
}

function showAdminSection(section) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(s => s.style.display = 'none');

    // Remover clase active de todos los botones
    const buttons = document.querySelectorAll('.dashboard-nav .nav-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Mostrar sección seleccionada
    document.getElementById('admin-' + section).style.display = 'block';
    event.target.classList.add('active');

    // Cargar contenido según la sección
    switch(section) {
        case 'alertas':
            loadAlertas();
            break;
        case 'pendientes':
            loadPendientes();
            break;
        case 'clientes':
            loadClientes();
            break;
        case 'pedidos':
            loadPedidosAdmin();
            break;
        case 'vencimientos':
            loadVencimientosForm();
            loadVencimientosList();
            break;
    }
}

// Sistema de Alertas
function loadAlertas() {
    const container = document.getElementById('alertas-container');
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));

    let alertasHTML = '';
    const diasInactividad = 60;
    const diasAlertaVencimiento = 7;

    // Alertas de inactividad
    const clientesAprobados = usuarios.filter(u => u.tipo === 'cliente' && u.aprobado);
    clientesAprobados.forEach(cliente => {
        const pedidosCliente = pedidos.filter(p => p.clienteId === cliente.id);
        let ultimoPedidoFecha;

        if (pedidosCliente.length === 0) {
            // Cliente nunca hizo pedido
            ultimoPedidoFecha = new Date(cliente.fechaRegistro);
        } else {
            // Último pedido del cliente
            const ultimoPedido = pedidosCliente.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0];
            ultimoPedidoFecha = new Date(ultimoPedido.fecha);
        }

        const diasSinPedido = Math.floor((Date.now() - ultimoPedidoFecha) / (1000 * 60 * 60 * 24));

        if (diasSinPedido >= diasInactividad) {
            const mensaje = pedidosCliente.length === 0 
                ? `Cliente registrado hace ${diasSinPedido} días pero nunca realizó un pedido`
                : `Cliente sin realizar pedidos hace ${diasSinPedido} días`;

            alertasHTML += `
                <div class="alert-box alert-warning">
                    <h4>⚠️ Inactividad Detectada</h4>
                    <p><strong>Cliente:</strong> ${cliente.nombre} (${cliente.empresa})</p>
                    <p>${mensaje}</p>
                    <p><strong>Último contacto:</strong> ${formatDate(ultimoPedidoFecha)}</p>
                </div>
            `;
        }
    });

    // Alertas de vencimientos próximos (solo facturas pendientes)
    vencimientos.filter(v => v.estado !== 'pagada').forEach(venc => {
        const diasHastaVencimiento = Math.floor((new Date(venc.fechaVencimiento) - Date.now()) / (1000 * 60 * 60 * 24));

        if (diasHastaVencimiento <= diasAlertaVencimiento && diasHastaVencimiento >= 0) {
            const nivelAlerta = diasHastaVencimiento <= 2 ? 'alert-danger' : 'alert-warning';
            const icono = diasHastaVencimiento <= 2 ? '🚨' : '⏰';

            alertasHTML += `
                <div class="alert-box ${nivelAlerta}">
                    <h4>${icono} Vencimiento Próximo</h4>
                    <p><strong>Cliente:</strong> ${venc.clienteNombre}</p>
                    <p><strong>Factura:</strong> ${venc.factura}</p>
                    <p><strong>Monto:</strong> $${venc.monto.toLocaleString()}</p>
                    <p><strong>Vence en:</strong> ${diasHastaVencimiento} día${diasHastaVencimiento !== 1 ? 's' : ''} (${formatDate(venc.fechaVencimiento)})</p>
                </div>
            `;
        }
    });

    if (alertasHTML === '') {
        alertasHTML = '<div class="empty-state"><p>✅ No hay alertas en este momento</p></div>';
    }

    container.innerHTML = alertasHTML;
}

// Cargar clientes pendientes de aprobación
function loadPendientes() {
    const container = document.getElementById('pendientes-container');
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const pendientes = usuarios.filter(u => u.tipo === 'cliente' && !u.aprobado);

    if (pendientes.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No hay clientes pendientes de aprobación</p></div>';
        return;
    }

    let html = '<table><thead><tr><th>Nombre</th><th>Empresa</th><th>Email</th><th>Teléfono</th><th>Fecha Registro</th><th>Acciones</th></tr></thead><tbody>';

    pendientes.forEach(cliente => {
        html += `
            <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.empresa}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefono}</td>
                <td>${formatDate(cliente.fechaRegistro)}</td>
                <td>
                    <button class="btn-approve" onclick="aprobarCliente(${cliente.id})">Aprobar</button>
                    <button class="btn-reject" onclick="rechazarCliente(${cliente.id})">Rechazar</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function aprobarCliente(id) {
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const cliente = usuarios.find(u => u.id === id);
    cliente.aprobado = true;
    localStorage.setItem('sinergia_usuarios', JSON.stringify(usuarios));
    loadPendientes();
    alert(`Cliente ${cliente.nombre} aprobado exitosamente`);
}

function rechazarCliente(id) {
    if (confirm('¿Estás seguro de rechazar este cliente?')) {
        const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
        const nuevosUsuarios = usuarios.filter(u => u.id !== id);
        localStorage.setItem('sinergia_usuarios', JSON.stringify(nuevosUsuarios));
        loadPendientes();
        alert('Cliente rechazado');
    }
}

// Cargar lista de clientes
function loadClientes() {
    const container = document.getElementById('clientes-container');
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const clientes = usuarios.filter(u => u.tipo === 'cliente' && u.aprobado);

    if (clientes.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No hay clientes registrados</p></div>';
        return;
    }

    let html = '<table><thead><tr><th>Nombre</th><th>Empresa</th><th>Email</th><th>Teléfono</th><th>Usuario</th><th>Fecha Registro</th><th>Acciones</th></tr></thead><tbody>';

    clientes.forEach(cliente => {
        html += `
            <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.empresa}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.username}</td>
                <td>${formatDate(cliente.fechaRegistro)}</td>
                <td><button class="btn-action" onclick="mostrarEditarCliente(${cliente.id})">Editar</button></td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// Cargar pedidos (admin)
function loadPedidosAdmin() {
    const container = document.getElementById('pedidos-container');
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));

    if (pedidos.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No hay pedidos registrados</p></div>';
        return;
    }

    // Ordenar por fecha descendente
    pedidos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    let html = '<table><thead><tr><th>Código</th><th>Fecha</th><th>Cliente</th><th>Marca</th><th>Producto</th><th>Cantidad</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';

    pedidos.forEach(pedido => {
        const codigoPedido = pedido.pedidoId || `PED-${pedido.id}`;
        const estadoActual = pedido.estado || 'Pendiente';
        const puedeEditar = estadoActual === 'Pendiente' || estadoActual === 'En Proceso';
        html += `
            <tr>
                <td><strong>${codigoPedido}</strong></td>
                <td>${formatDate(pedido.fecha)}</td>
                <td>${pedido.clienteNombre}</td>
                <td>${pedido.marca}</td>
                <td>${pedido.producto}</td>
                <td>${pedido.cantidad} ${pedido.unidad || 'unidades'}</td>
                <td><span class="status-badge status-${estadoActual.toLowerCase().replace(' ', '-')}">${estadoActual}</span></td>
                <td>
                    ${estadoActual === 'Pendiente' ? `<button class="btn-action" onclick="cambiarEstadoPedido(${pedido.id}, 'En Proceso')">Procesar</button>` : ''}
                    ${puedeEditar ? `<button class="btn-action" onclick="editarPedidoAdmin(${pedido.id})" style="margin-left: 0.5rem;">Editar</button>` : ''}
                    ${estadoActual === 'En Proceso' && !puedeEditar ? `<span style="color: #667eea; font-weight: 600;">En procesamiento</span>` : ''}
                    ${estadoActual === 'Facturado' ? `<span style="color: #d4983d; font-weight: 600;">Facturado</span>` : ''}
                    ${estadoActual === 'Pagado' ? `<span style="color: #28a745; font-weight: 600;">✓ Completado</span>` : ''}
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// Cargar formulario de vencimientos
function loadVencimientosForm() {
    const select = document.getElementById('venc-cliente');
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const clientes = usuarios.filter(u => u.tipo === 'cliente' && u.aprobado);

    let html = '<option value="">-- Seleccione un cliente --</option>';
    clientes.forEach(cliente => {
        html += `<option value="${cliente.id}">${cliente.nombre} - ${cliente.empresa}</option>`;
    });

    select.innerHTML = html;
}

// Cargar pedidos del cliente seleccionado para vincular a factura
function loadPedidosDelCliente() {
    const clienteId = parseInt(document.getElementById('venc-cliente').value);
    const container = document.getElementById('venc-pedidos-container');
    
    if (!clienteId) {
        container.innerHTML = '<p style="color: #999; font-style: italic;">Selecciona primero un cliente</p>';
        return;
    }
    
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedidosCliente = pedidos.filter(p => p.clienteId === clienteId && p.estado !== 'Pagado');
    
    let html = '';
    
    if (pedidosCliente.length === 0) {
        html = '<label style="display: block; padding: 0.5rem; background: #f8f9fa; border-radius: 5px;"><input type="checkbox" name="pedido-vinculado" value="sin-pedido" style="margin-right: 0.5rem;"><span style="font-weight: 600; color: #e67e22;">Sin pedido (Excepción)</span></label>';
    } else {
        pedidosCliente.forEach(pedido => {
            const estadoColor = pedido.estado === 'Pendiente' ? '#ffc107' : pedido.estado === 'En Proceso' ? '#667eea' : '#d4983d';
            html += `
                <label style="display: block; padding: 0.5rem; margin-bottom: 0.3rem; cursor: pointer; transition: background 0.2s;">
                    <input type="checkbox" name="pedido-vinculado" value="${pedido.pedidoId}" style="margin-right: 0.5rem;">
                    <strong>${pedido.pedidoId}</strong> - ${pedido.producto} 
                    <span style="color: ${estadoColor}; font-size: 0.85em;">(${pedido.estado})</span>
                </label>
            `;
        });
        html += '<label style="display: block; padding: 0.5rem; margin-top: 0.5rem; background: #fff3cd; border-radius: 5px;"><input type="checkbox" name="pedido-vinculado" value="sin-pedido" style="margin-right: 0.5rem;"><span style="font-weight: 600; color: #e67e22;">Sin pedido (Excepción)</span></label>';
    }
    
    container.innerHTML = html;
}

function handleCargarVencimiento(event) {
    event.preventDefault();
    
    const clienteId = parseInt(document.getElementById('venc-cliente').value);
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const cliente = usuarios.find(u => u.id === clienteId);

    // Obtener pedidos seleccionados
    const checkboxes = document.querySelectorAll('input[name="pedido-vinculado"]:checked');
    const pedidosSeleccionados = Array.from(checkboxes).map(cb => cb.value);
    
    if (pedidosSeleccionados.length === 0) {
        alert('Debes seleccionar al menos un pedido o marcar "Sin pedido (Excepción)"');
        return;
    }

    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    
    // Corregir problema de zona horaria en fecha de vencimiento
    const fechaVencInput = document.getElementById('venc-fecha').value;
    const [yearV, monthV, dayV] = fechaVencInput.split('-');
    const fechaVencimiento = new Date(yearV, monthV - 1, dayV);
    
    const nuevoVencimiento = {
        id: vencimientos.length + 1,
        clienteId: clienteId,
        clienteNombre: cliente.nombre,
        factura: document.getElementById('venc-factura').value,
        monto: parseFloat(document.getElementById('venc-monto').value),
        fechaVencimiento: fechaVencimiento.toISOString(),
        estado: 'pendiente',
        pedidosVinculados: pedidosSeleccionados.filter(p => p !== 'sin-pedido'),
        sinPedido: pedidosSeleccionados.includes('sin-pedido')
    };

    vencimientos.push(nuevoVencimiento);
    localStorage.setItem('sinergia_vencimientos', JSON.stringify(vencimientos));

    // Cambiar estado de pedidos vinculados a "Facturado"
    let pedidosActualizados = 0;
    nuevoVencimiento.pedidosVinculados.forEach(pedidoId => {
        const pedido = pedidos.find(p => p.pedidoId === pedidoId);
        if (pedido && pedido.estado !== 'Pagado') {
            pedido.estado = 'Facturado';
            pedidosActualizados++;
        }
    });
    
    if (pedidosActualizados > 0) {
        localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
    }

    if (nuevoVencimiento.sinPedido) {
        alert('Vencimiento cargado sin pedido asociado (excepción)');
    } else {
        alert(`Vencimiento cargado y vinculado a ${pedidosActualizados} pedido(s)`);
    }
    
    document.getElementById('vencimientos-form').reset();
    document.getElementById('venc-pedidos-container').innerHTML = '<p style="color: #999; font-style: italic;">Selecciona primero un cliente</p>';
    loadVencimientosList();
}

function loadVencimientosList() {
    const container = document.getElementById('vencimientos-list');
    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));

    if (vencimientos.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No hay vencimientos cargados</p></div>';
        return;
    }

    let html = '<h3>Vencimientos Registrados</h3><table><thead><tr><th>Cliente</th><th>Factura</th><th>Monto</th><th>Vencimiento</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>';

    vencimientos.forEach(venc => {
        const diasHasta = Math.floor((new Date(venc.fechaVencimiento) - Date.now()) / (1000 * 60 * 60 * 24));
        let estado = '';
        let accionBtn = '';
        
        if (venc.estado === 'pagada') {
            estado = `<span class="status-badge status-aprobado">✓ Pagada</span>`;
            accionBtn = `<span class="text-muted" style="font-size: 0.85em;">Pagada el ${formatDate(venc.fechaPago)}</span>`;
        } else {
            if (diasHasta < 0) {
                estado = '<span class="status-badge status-pendiente">Vencida</span>';
            } else if (diasHasta <= 7) {
                estado = '<span class="status-badge status-pendiente">Por vencer</span>';
            } else {
                estado = '<span class="status-badge status-enviado">Pendiente</span>';
            }
            accionBtn = `
                <button class="btn-small btn-success" onclick="marcarComoPagada(${venc.id})">Marcar Pagada</button>
                <button class="btn-small btn-warning" onclick="solicitarEditarFactura(${venc.id})">Editar</button>
            `;
        }

        html += `
            <tr>
                <td>${venc.clienteNombre}</td>
                <td>${venc.factura}</td>
                <td>$${venc.monto.toLocaleString()}</td>
                <td>${formatDate(venc.fechaVencimiento)}</td>
                <td>${estado}</td>
                <td>${accionBtn}</td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// Función para abrir modal de fecha de pago
function marcarComoPagada(vencimientoId) {
    // Establecer fecha actual como predeterminada
    const hoy = new Date().toISOString().split('T')[0];
    document.getElementById('fecha-pago').value = hoy;
    document.getElementById('venc-id-pago').value = vencimientoId;
    document.getElementById('fecha-pago-modal').style.display = 'flex';
}

function closeFechaPagoModal() {
    document.getElementById('fecha-pago-modal').style.display = 'none';
    document.getElementById('fecha-pago-form').reset();
}

// Funciones para editar datos de clientes
function mostrarEditarCliente(clienteId) {
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const cliente = usuarios.find(u => u.id === clienteId);
    
    if (cliente) {
        document.getElementById('edit-cliente-id').value = cliente.id;
        document.getElementById('edit-cliente-nombre').value = cliente.nombre;
        document.getElementById('edit-cliente-empresa').value = cliente.empresa;
        document.getElementById('edit-cliente-email').value = cliente.email;
        document.getElementById('edit-cliente-telefono').value = cliente.telefono;
        document.getElementById('editar-cliente-modal').style.display = 'flex';
    }
}

function closeEditarClienteModal() {
    document.getElementById('editar-cliente-modal').style.display = 'none';
    document.getElementById('editar-cliente-form').reset();
}

function handleEditarCliente(event) {
    event.preventDefault();
    
    const clienteId = parseInt(document.getElementById('edit-cliente-id').value);
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const cliente = usuarios.find(u => u.id === clienteId);
    
    if (cliente) {
        cliente.nombre = document.getElementById('edit-cliente-nombre').value;
        cliente.empresa = document.getElementById('edit-cliente-empresa').value;
        cliente.email = document.getElementById('edit-cliente-email').value;
        cliente.telefono = document.getElementById('edit-cliente-telefono').value;
        
        localStorage.setItem('sinergia_usuarios', JSON.stringify(usuarios));
        
        // Actualizar también el nombre en pedidos y vencimientos
        actualizarNombreClienteEnDatos(clienteId, cliente.nombre);
        
        closeEditarClienteModal();
        loadClientes();
        alert('Datos del cliente actualizados correctamente');
    }
}

function actualizarNombreClienteEnDatos(clienteId, nuevoNombre) {
    // Actualizar en pedidos
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    pedidos.forEach(p => {
        if (p.clienteId === clienteId) {
            p.clienteNombre = nuevoNombre;
        }
    });
    localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
    
    // Actualizar en vencimientos
    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));
    vencimientos.forEach(v => {
        if (v.clienteId === clienteId) {
            v.clienteNombre = nuevoNombre;
        }
    });
    localStorage.setItem('sinergia_vencimientos', JSON.stringify(vencimientos));
}


// Función para procesar el marcado como pagada con fecha seleccionada
function handleMarcarPagada(event) {
    event.preventDefault();
    
    const vencimientoId = parseInt(document.getElementById('venc-id-pago').value);
    const fechaPagoInput = document.getElementById('fecha-pago').value;
    
    // Convertir la fecha sin problemas de zona horaria
    const [year, month, day] = fechaPagoInput.split('-');
    const fechaPago = new Date(year, month - 1, day);
    
    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));
    const venc = vencimientos.find(v => v.id === vencimientoId);
    
    if (venc) {
        venc.estado = 'pagada';
        venc.fechaPago = fechaPago.toISOString();
        localStorage.setItem('sinergia_vencimientos', JSON.stringify(vencimientos));
        
        // Actualizar estado de los pedidos vinculados a "Pagado"
        const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
        let pedidosActualizados = 0;
        
        // Si es una factura sin pedido (excepción), crear pedido de excepción
        if (venc.sinPedido) {
            const pedidoExcepcion = {
                id: pedidos.length + 1,
                pedidoId: 'PED-' + Date.now() + '-EXC' + Math.random().toString(36).substr(2, 2).toUpperCase(),
                clienteId: venc.clienteId,
                clienteNombre: venc.clienteNombre,
                marca: 'Sin especificar',
                producto: `Pedido excepción - Factura ${venc.factura}`,
                cantidad: 1,
                unidad: 'unidades',
                observaciones: 'Pedido generado automáticamente por factura sin pedido asociado',
                fecha: fechaPago.toISOString(),
                estado: 'Pagado',
                esExcepcion: true
            };
            pedidos.push(pedidoExcepcion);
            venc.pedidosVinculados = [pedidoExcepcion.pedidoId];
            venc.sinPedido = false; // Ya no es sin pedido porque ahora tiene uno vinculado
        }
        
        // Soporte para vinculación antigua (pedidoId) y nueva (pedidosVinculados)
        if (venc.pedidosVinculados && venc.pedidosVinculados.length > 0) {
            venc.pedidosVinculados.forEach(pedidoId => {
                const pedido = pedidos.find(p => p.pedidoId === pedidoId);
                if (pedido) {
                    pedido.estado = 'Pagado';
                    pedidosActualizados++;
                }
            });
        } else if (venc.pedidoId) {
            // Compatibilidad con sistema antiguo
            const pedido = pedidos.find(p => p.pedidoId === venc.pedidoId);
            if (pedido) {
                pedido.estado = 'Pagado';
                pedidosActualizados++;
            }
        }
        
        localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
        localStorage.setItem('sinergia_vencimientos', JSON.stringify(vencimientos));
        
        closeFechaPagoModal();
        loadVencimientosList();
        loadAlertas(); // Actualizar alertas también
        alert('Factura marcada como pagada exitosamente');
    }
}

// Funciones para editar facturas
function solicitarEditarFactura(vencimientoId) {
    document.getElementById('edit-venc-id').value = vencimientoId;
    document.getElementById('auth-edit-modal').style.display = 'flex';
}

function closeAuthEditModal() {
    document.getElementById('auth-edit-modal').style.display = 'none';
    document.getElementById('auth-edit-form').reset();
}

function handleAuthEdit(event) {
    event.preventDefault();
    
    const username = document.getElementById('auth-username').value;
    const password = document.getElementById('auth-password').value;
    
    // Verificar credenciales de administrador
    if (username !== currentUser.username || password !== currentUser.password) {
        alert('Credenciales incorrectas');
        return;
    }
    
    const vencId = parseInt(document.getElementById('edit-venc-id').value);
    closeAuthEditModal();
    mostrarFormularioEditarFactura(vencId);
}

function mostrarFormularioEditarFactura(vencimientoId) {
    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));
    const venc = vencimientos.find(v => v.id === vencimientoId);
    
    if (venc) {
        document.getElementById('edit-factura-id').value = venc.id;
        document.getElementById('edit-factura-cliente-id').value = venc.clienteId;
        document.getElementById('edit-factura-numero').value = venc.factura;
        document.getElementById('edit-factura-monto').value = venc.monto;
        
        // Convertir fecha para evitar problema de zona horaria
        const fecha = new Date(venc.fechaVencimiento);
        const year = fecha.getFullYear();
        const month = String(fecha.getMonth() + 1).padStart(2, '0');
        const day = String(fecha.getDate()).padStart(2, '0');
        document.getElementById('edit-factura-fecha').value = `${year}-${month}-${day}`;
        
        // Cargar pedidos del cliente para editar vinculación
        loadPedidosParaEditar(venc.clienteId, venc.pedidosVinculados || [], venc.sinPedido || false);
        
        document.getElementById('edit-factura-modal').style.display = 'flex';
    }
}

function loadPedidosParaEditar(clienteId, pedidosVinculados, esSinPedido) {
    const container = document.getElementById('edit-pedidos-container');
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedidosCliente = pedidos.filter(p => p.clienteId === clienteId && p.estado !== 'Pagado');
    
    let html = '';
    
    if (pedidosCliente.length === 0 && !esSinPedido) {
        html = '<label style="display: block; padding: 0.5rem; background: #f8f9fa; border-radius: 5px;"><input type="checkbox" name="edit-pedido-vinculado" value="sin-pedido" checked style="margin-right: 0.5rem;"><span style="font-weight: 600; color: #e67e22;">Sin pedido (Excepción)</span></label>';
    } else {
        pedidosCliente.forEach(pedido => {
            const isChecked = pedidosVinculados.includes(pedido.pedidoId) ? 'checked' : '';
            const estadoColor = pedido.estado === 'Pendiente' ? '#ffc107' : pedido.estado === 'En Proceso' ? '#667eea' : '#d4983d';
            html += `
                <label style="display: block; padding: 0.5rem; margin-bottom: 0.3rem; cursor: pointer;">
                    <input type="checkbox" name="edit-pedido-vinculado" value="${pedido.pedidoId}" ${isChecked} style="margin-right: 0.5rem;">
                    <strong>${pedido.pedidoId}</strong> - ${pedido.producto} 
                    <span style="color: ${estadoColor}; font-size: 0.85em;">(${pedido.estado})</span>
                </label>
            `;
        });
        const sinPedidoChecked = esSinPedido ? 'checked' : '';
        html += `<label style="display: block; padding: 0.5rem; margin-top: 0.5rem; background: #fff3cd; border-radius: 5px;"><input type="checkbox" name="edit-pedido-vinculado" value="sin-pedido" ${sinPedidoChecked} style="margin-right: 0.5rem;"><span style="font-weight: 600; color: #e67e22;">Sin pedido (Excepción)</span></label>`;
    }
    
    container.innerHTML = html;
}

function closeEditFacturaModal() {
    document.getElementById('edit-factura-modal').style.display = 'none';
    document.getElementById('edit-factura-form').reset();
}

function handleEditFactura(event) {
    event.preventDefault();
    
    const vencId = parseInt(document.getElementById('edit-factura-id').value);
    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));
    const venc = vencimientos.find(v => v.id === vencId);
    
    if (venc) {
        // Obtener pedidos seleccionados
        const checkboxes = document.querySelectorAll('input[name="edit-pedido-vinculado"]:checked');
        const pedidosSeleccionados = Array.from(checkboxes).map(cb => cb.value);
        
        // Guardar antiguos pedidos vinculados para actualizar estados
        const antiguosPedidos = venc.pedidosVinculados || [];
        
        venc.factura = document.getElementById('edit-factura-numero').value;
        venc.monto = parseFloat(document.getElementById('edit-factura-monto').value);
        
        // Corregir fecha de vencimiento
        const fechaInput = document.getElementById('edit-factura-fecha').value;
        const [year, month, day] = fechaInput.split('-');
        const fechaVencimiento = new Date(year, month - 1, day);
        venc.fechaVencimiento = fechaVencimiento.toISOString();
        
        venc.pedidosVinculados = pedidosSeleccionados.filter(p => p !== 'sin-pedido');
        venc.sinPedido = pedidosSeleccionados.includes('sin-pedido');
        
        // Actualizar estados de pedidos
        const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
        
        // Revertir pedidos que ya no están vinculados
        antiguosPedidos.forEach(pedidoId => {
            if (!venc.pedidosVinculados.includes(pedidoId)) {
                const pedido = pedidos.find(p => p.pedidoId === pedidoId);
                if (pedido && pedido.estado === 'Facturado') {
                    pedido.estado = 'En Proceso';
                }
            }
        });
        
        // Actualizar nuevos pedidos vinculados
        venc.pedidosVinculados.forEach(pedidoId => {
            const pedido = pedidos.find(p => p.pedidoId === pedidoId);
            if (pedido && pedido.estado !== 'Pagado') {
                pedido.estado = 'Facturado';
            }
        });
        
        localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
        localStorage.setItem('sinergia_vencimientos', JSON.stringify(vencimientos));
        
        closeEditFacturaModal();
        loadVencimientosList();
        loadAlertas();
        alert('Factura actualizada exitosamente');
    }
}

// Función para cambiar estado de pedido
function cambiarEstadoPedido(pedidoId, nuevoEstado) {
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedido = pedidos.find(p => p.id === pedidoId);
    
    if (pedido) {
        pedido.estado = nuevoEstado;
        localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
        loadPedidosAdmin();
        alert(`Estado del pedido actualizado a: ${nuevoEstado}`);
    }
}

// Portal Cliente
function showClientPortal() {
    document.getElementById('client-portal').style.display = 'block';
    showClientSection('nuevo-pedido');
}

function showClientSection(section) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('#client-portal .dashboard-section');
    sections.forEach(s => s.style.display = 'none');

    // Remover clase active de todos los botones
    const buttons = document.querySelectorAll('#client-portal .dashboard-nav .nav-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Mostrar sección seleccionada
    document.getElementById('client-' + section).style.display = 'block';
    event.target.classList.add('active');

    if (section === 'mis-pedidos') {
        loadMisPedidos();
    } else if (section === 'mis-datos') {
        loadMisDatos();
    } else if (section === 'nuevo-pedido') {
        // Resetear carrito al volver a nuevo pedido
        productosCarrito = [];
        document.getElementById('productos-carrito').style.display = 'none';
    }
}

// Variable global para el carrito de productos
let productosCarrito = [];
let marcaSeleccionadaCarrito = '';

function handleAgregarProducto(event) {
    event.preventDefault();

    const marca = document.getElementById('pedido-marca').value;
    const productoSelect = document.getElementById('pedido-producto');
    const productoNombre = productoSelect.options[productoSelect.selectedIndex].text;
    const cantidad = parseInt(document.getElementById('pedido-cantidad').value);
    const unidad = document.getElementById('pedido-unidad').value;

    // Si ya hay productos, verificar que sea la misma marca
    if (productosCarrito.length > 0 && marcaSeleccionadaCarrito !== marca) {
        alert('Solo puedes agregar productos de la misma marca. Si deseas ordenar de otra marca, envía este pedido primero y crea uno nuevo.');
        return;
    }

    // Agregar producto al carrito
    productosCarrito.push({
        producto: productoNombre,
        cantidad: cantidad,
        unidad: unidad
    });

    marcaSeleccionadaCarrito = marca;

    // Mostrar carrito y actualizar vista
    document.getElementById('productos-carrito').style.display = 'block';
    actualizarVistaCarrito();

    // Limpiar campos de producto y cantidad
    document.getElementById('pedido-cantidad').value = '';
    productoSelect.selectedIndex = 0;

    alert('Producto agregado. Puedes agregar más productos de ' + marca + ' o enviar el pedido.');
}

function actualizarVistaCarrito() {
    const container = document.getElementById('lista-productos-carrito');
    let html = '<div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">';
    html += `<p style="margin: 0 0 0.5rem 0;"><strong>Marca:</strong> ${marcaSeleccionadaCarrito}</p>`;
    
    productosCarrito.forEach((item, index) => {
        html += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: white; margin-bottom: 0.5rem; border-radius: 5px;">
                <span><strong>${item.producto}</strong> - ${item.cantidad} ${item.unidad}</span>
                <button class="btn-secondary" onclick="eliminarProductoCarrito(${index})" style="padding: 0.3rem 0.8rem;">Eliminar</button>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

function eliminarProductoCarrito(index) {
    productosCarrito.splice(index, 1);
    if (productosCarrito.length === 0) {
        document.getElementById('productos-carrito').style.display = 'none';
        marcaSeleccionadaCarrito = '';
    } else {
        actualizarVistaCarrito();
    }
}

function cancelarPedido() {
    if (confirm('¿Estás seguro de cancelar este pedido? Se perderán todos los productos agregados.')) {
        productosCarrito = [];
        marcaSeleccionadaCarrito = '';
        document.getElementById('productos-carrito').style.display = 'none';
        document.getElementById('pedido-form').reset();
        document.getElementById('pedido-producto').disabled = true;
    }
}

function enviarPedidoCompleto() {
    if (productosCarrito.length === 0) {
        alert('Debes agregar al menos un producto');
        return;
    }

    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedidoId = 'PED-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
    
    // Crear descripción de productos
    let descripcionProductos = productosCarrito.map(p => `${p.producto} (${p.cantidad} ${p.unidad})`).join(', ');
    
    const nuevoPedido = {
        id: pedidos.length + 1,
        pedidoId: pedidoId,
        clienteId: currentUser.id,
        clienteNombre: currentUser.nombre,
        marca: marcaSeleccionadaCarrito,
        producto: descripcionProductos,
        productos: productosCarrito, // Array completo de productos
        cantidad: productosCarrito.reduce((sum, p) => sum + p.cantidad, 0),
        unidad: 'items',
        observaciones: document.getElementById('pedido-observaciones-final').value,
        fecha: new Date().toISOString(),
        estado: 'Pendiente'
    };

    pedidos.push(nuevoPedido);
    localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));

    alert('Pedido enviado exitosamente. Código de seguimiento: ' + pedidoId);
    
    // Limpiar todo
    productosCarrito = [];
    marcaSeleccionadaCarrito = '';
    document.getElementById('productos-carrito').style.display = 'none';
    document.getElementById('pedido-form').reset();
    document.getElementById('pedido-producto').disabled = true;
    document.getElementById('pedido-observaciones-final').value = '';
}

// Mantener función antigua para compatibilidad
function handleNuevoPedido(event) {
    handleAgregarProducto(event);
}

function loadMisPedidos() {
    const container = document.getElementById('mis-pedidos-container');
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const misPedidos = pedidos.filter(p => p.clienteId === currentUser.id);

    if (misPedidos.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No has realizado pedidos aún</p></div>';
        return;
    }

    // Ordenar por fecha descendente
    misPedidos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    let html = '';
    misPedidos.forEach(pedido => {
        const estadoDisplay = pedido.estado || 'Pendiente';
        const codigoPedido = pedido.pedidoId || `PED-${pedido.id}`;
        const puedeEditar = estadoDisplay === 'Pendiente';
        html += `
            <div class="card">
                <h3>Pedido ${codigoPedido}</h3>
                <p><strong>Fecha:</strong> ${formatDate(pedido.fecha)}</p>
                <p><strong>Marca:</strong> ${pedido.marca}</p>
                <p><strong>Producto:</strong> ${pedido.producto}</p>
                <p><strong>Cantidad:</strong> ${pedido.cantidad} ${pedido.unidad || 'unidades'}</p>
                <p><strong>Observaciones:</strong> ${pedido.observaciones || 'Ninguna'}</p>
                <p><strong>Estado:</strong> <span class="status-badge status-${estadoDisplay.toLowerCase().replace(' ', '-')}">${estadoDisplay}</span></p>
                ${puedeEditar ? `<button class="btn-action" onclick="editarPedidoCliente(${pedido.id})">Editar Pedido</button>` : ''}
            </div>
        `;
    });

    container.innerHTML = html;
}

// Utilidades
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Navegación dinámica y efectos
document.addEventListener('DOMContentLoaded', function() {
    // Efecto sticky en navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Resaltar link activo en navegación
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Animación suave para elementos al entrar en viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos animables
    const animatedElements = document.querySelectorAll('.service-row, .brand-item, .cta-card');
    animatedElements.forEach(el => observer.observe(el));
    
    // Cargar catálogo de productos al inicio
    if (document.getElementById('catalog-products')) {
        filterProducts('todas');
    }
});

// Función para cargar productos según marca seleccionada en formulario
function loadProductsByMarca() {
    const marca = document.getElementById('pedido-marca').value;
    const productoSelect = document.getElementById('pedido-producto');
    
    if (!marca) {
        productoSelect.disabled = true;
        productoSelect.innerHTML = '<option value="">-- Primero seleccione una marca --</option>';
        return;
    }
    
    const productos = catalogoProductos[marca] || [];
    
    productoSelect.disabled = false;
    productoSelect.innerHTML = '<option value="">-- Seleccione un producto --</option>';
    
    productos.forEach(producto => {
        const option = document.createElement('option');
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        productoSelect.appendChild(option);
    });
}

// Función para filtrar productos en el catálogo público
function filterProducts(marca) {
    const container = document.getElementById('catalog-products');
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        // Activar el botón correspondiente
        if ((marca === 'todas' && btn.textContent.includes('Todas')) ||
            (marca !== 'todas' && btn.textContent.includes(marca))) {
            btn.classList.add('active');
        }
    });
    
    let productosHTML = '';
    
    if (marca === 'todas') {
        // Mostrar todos los productos
        Object.keys(catalogoProductos).forEach(marcaNombre => {
            catalogoProductos[marcaNombre].forEach(producto => {
                productosHTML += `
                    <div class="product-card">
                        <div class="product-header">
                            <h4>${producto.nombre}</h4>
                            <span class="product-brand">${marcaNombre}</span>
                        </div>
                        <p class="product-description">${producto.descripcion}</p>
                    </div>
                `;
            });
        });
    } else {
        // Mostrar productos de la marca seleccionada
        const productos = catalogoProductos[marca] || [];
        productos.forEach(producto => {
            productosHTML += `
                <div class="product-card">
                    <div class="product-header">
                        <h4>${producto.nombre}</h4>
                        <span class="product-brand">${marca}</span>
                    </div>
                    <p class="product-description">${producto.descripcion}</p>
                </div>
            `;
        });
    }
    
    if (productosHTML === '') {
        productosHTML = '<div class="empty-state"><p>No hay productos disponibles para esta marca</p></div>';
    }
    
    container.innerHTML = productosHTML;
}

// Funciones para gestión de datos del cliente
function loadMisDatos() {
    const container = document.getElementById('datos-cliente-vista');
    
    let html = `
        <div class="client-info">
            <div class="info-row">
                <span class="info-label">Nombre:</span>
                <span class="info-value">${currentUser.nombre}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Empresa:</span>
                <span class="info-value">${currentUser.empresa}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">${currentUser.email}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Teléfono:</span>
                <span class="info-value">${currentUser.telefono}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Usuario:</span>
                <span class="info-value">${currentUser.username}</span>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function mostrarEditarMisDatos() {
    document.getElementById('auth-mis-datos-modal').style.display = 'flex';
}

function closeAuthMisDatosModal() {
    document.getElementById('auth-mis-datos-modal').style.display = 'none';
    document.getElementById('auth-mis-datos-form').reset();
}

function handleAuthMisDatos(event) {
    event.preventDefault();
    
    const password = document.getElementById('auth-password-datos').value;
    
    if (password === currentUser.password) {
        closeAuthMisDatosModal();
        mostrarFormularioEditarMisDatos();
    } else {
        alert('Contraseña incorrecta');
    }
}

function mostrarFormularioEditarMisDatos() {
    document.getElementById('edit-mis-datos-nombre').value = currentUser.nombre;
    document.getElementById('edit-mis-datos-empresa').value = currentUser.empresa;
    document.getElementById('edit-mis-datos-email').value = currentUser.email;
    document.getElementById('edit-mis-datos-telefono').value = currentUser.telefono;
    document.getElementById('editar-mis-datos-modal').style.display = 'flex';
}

function closeEditarMisDatosModal() {
    document.getElementById('editar-mis-datos-modal').style.display = 'none';
    document.getElementById('editar-mis-datos-form').reset();
}

function handleEditarMisDatos(event) {
    event.preventDefault();
    
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const usuario = usuarios.find(u => u.id === currentUser.id);
    
    if (usuario) {
        usuario.nombre = document.getElementById('edit-mis-datos-nombre').value;
        usuario.empresa = document.getElementById('edit-mis-datos-empresa').value;
        usuario.email = document.getElementById('edit-mis-datos-email').value;
        usuario.telefono = document.getElementById('edit-mis-datos-telefono').value;
        
        localStorage.setItem('sinergia_usuarios', JSON.stringify(usuarios));
        
        // Actualizar también en currentUser
        currentUser.nombre = usuario.nombre;
        currentUser.empresa = usuario.empresa;
        currentUser.email = usuario.email;
        currentUser.telefono = usuario.telefono;
        
        // Actualizar nombre en pedidos y vencimientos
        actualizarNombreClienteEnDatos(currentUser.id, currentUser.nombre);
        
        closeEditarMisDatosModal();
        loadMisDatos();
        alert('Datos actualizados correctamente');
    }
}

// Funciones para editar pedidos (Cliente)
function editarPedidoCliente(pedidoId) {
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedido = pedidos.find(p => p.id === pedidoId);
    
    if (pedido) {
        document.getElementById('edit-pedido-cliente-id').value = pedido.id;
        document.getElementById('edit-pedido-cliente-marca').value = pedido.marca;
        document.getElementById('edit-pedido-cliente-producto').value = pedido.producto;
        document.getElementById('edit-pedido-cliente-cantidad').value = pedido.cantidad;
        document.getElementById('edit-pedido-cliente-unidad').value = pedido.unidad;
        document.getElementById('edit-pedido-cliente-observaciones').value = pedido.observaciones || '';
        document.getElementById('editar-pedido-cliente-modal').style.display = 'flex';
    }
}

function closeEditarPedidoClienteModal() {
    document.getElementById('editar-pedido-cliente-modal').style.display = 'none';
    document.getElementById('editar-pedido-cliente-form').reset();
}

function handleEditarPedidoCliente(event) {
    event.preventDefault();
    
    const pedidoId = parseInt(document.getElementById('edit-pedido-cliente-id').value);
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedido = pedidos.find(p => p.id === pedidoId);
    
    if (pedido) {
        pedido.producto = document.getElementById('edit-pedido-cliente-producto').value;
        pedido.cantidad = parseInt(document.getElementById('edit-pedido-cliente-cantidad').value);
        pedido.unidad = document.getElementById('edit-pedido-cliente-unidad').value;
        pedido.observaciones = document.getElementById('edit-pedido-cliente-observaciones').value;
        
        localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
        
        closeEditarPedidoClienteModal();
        loadMisPedidos();
        alert('Pedido actualizado exitosamente');
    }
}

// Funciones para editar pedidos (Admin)
function editarPedidoAdmin(pedidoId) {
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedido = pedidos.find(p => p.id === pedidoId);
    
    if (pedido) {
        document.getElementById('edit-pedido-admin-id').value = pedido.id;
        document.getElementById('edit-pedido-admin-cliente').value = pedido.clienteNombre;
        document.getElementById('edit-pedido-admin-marca').value = pedido.marca;
        document.getElementById('edit-pedido-admin-producto').value = pedido.producto;
        document.getElementById('edit-pedido-admin-cantidad').value = pedido.cantidad;
        document.getElementById('edit-pedido-admin-unidad').value = pedido.unidad;
        document.getElementById('edit-pedido-admin-observaciones').value = pedido.observaciones || '';
        document.getElementById('editar-pedido-admin-modal').style.display = 'flex';
    }
}

function closeEditarPedidoAdminModal() {
    document.getElementById('editar-pedido-admin-modal').style.display = 'none';
    document.getElementById('editar-pedido-admin-form').reset();
}

function handleEditarPedidoAdmin(event) {
    event.preventDefault();
    
    const pedidoId = parseInt(document.getElementById('edit-pedido-admin-id').value);
    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const pedido = pedidos.find(p => p.id === pedidoId);
    
    if (pedido) {
        pedido.producto = document.getElementById('edit-pedido-admin-producto').value;
        pedido.cantidad = parseInt(document.getElementById('edit-pedido-admin-cantidad').value);
        pedido.unidad = document.getElementById('edit-pedido-admin-unidad').value;
        pedido.observaciones = document.getElementById('edit-pedido-admin-observaciones').value;
        
        localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));
        
        closeEditarPedidoAdminModal();
        loadPedidosAdmin();
        alert('Pedido actualizado exitosamente');
    }
}
