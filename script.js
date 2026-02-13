// Inicialización de datos de prueba en localStorage
function initializeDemoData() {
    if (!localStorage.getItem('sinergia_initialized')) {
        // Usuarios (admin y clientes)
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
            }
        ];

        // Pedidos con diferentes fechas
        const pedidos = [
            {
                id: 1,
                clienteId: 2,
                clienteNombre: 'Juan Pérez',
                marca: 'Marca 1',
                producto: 'Galletas surtidas x 500g',
                cantidad: 50,
                observaciones: 'Descuento 5% por volumen',
                fecha: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 días atrás
                estado: 'enviado'
            },
            {
                id: 2,
                clienteId: 2,
                clienteNombre: 'Juan Pérez',
                marca: 'Marca 3',
                producto: 'Alfajores x 12 unidades',
                cantidad: 100,
                observaciones: '',
                fecha: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 días atrás
                estado: 'enviado'
            },
            {
                id: 3,
                clienteId: 3,
                clienteNombre: 'María González',
                marca: 'Marca 2',
                producto: 'Cereales 1kg',
                cantidad: 75,
                observaciones: 'Entrega urgente',
                fecha: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 días atrás
                estado: 'enviado'
            },
            {
                id: 4,
                clienteId: 3,
                clienteNombre: 'María González',
                marca: 'Marca 5',
                producto: 'Dulce de leche 400g',
                cantidad: 120,
                observaciones: '',
                fecha: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(), // 75 días atrás
                estado: 'enviado'
            },
            {
                id: 5,
                clienteId: 4,
                clienteNombre: 'Carlos Rodríguez',
                marca: 'Marca 4',
                producto: 'Pan dulce 500g',
                cantidad: 30,
                observaciones: 'Para fin de año',
                fecha: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 días atrás
                estado: 'enviado'
            }
        ];

        // Vencimientos de facturas
        const vencimientos = [
            {
                id: 1,
                clienteId: 2,
                clienteNombre: 'Juan Pérez',
                factura: 'FC-001-00123',
                monto: 25000,
                fechaVencimiento: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() // Vence en 5 días
            },
            {
                id: 2,
                clienteId: 3,
                clienteNombre: 'María González',
                monto: 18500,
                factura: 'FC-001-00124',
                fechaVencimiento: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString() // Vence en 2 días
            },
            {
                id: 3,
                clienteId: 4,
                clienteNombre: 'Carlos Rodríguez',
                factura: 'FC-001-00125',
                monto: 32000,
                fechaVencimiento: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString() // Vence en 15 días
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

    // Alertas de vencimientos próximos
    vencimientos.forEach(venc => {
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

    let html = '<table><thead><tr><th>Nombre</th><th>Empresa</th><th>Email</th><th>Teléfono</th><th>Usuario</th><th>Fecha Registro</th></tr></thead><tbody>';

    clientes.forEach(cliente => {
        html += `
            <tr>
                <td>${cliente.nombre}</td>
                <td>${cliente.empresa}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.username}</td>
                <td>${formatDate(cliente.fechaRegistro)}</td>
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

    let html = '<table><thead><tr><th>Fecha</th><th>Cliente</th><th>Marca</th><th>Producto</th><th>Cantidad</th><th>Observaciones</th></tr></thead><tbody>';

    pedidos.forEach(pedido => {
        html += `
            <tr>
                <td>${formatDate(pedido.fecha)}</td>
                <td>${pedido.clienteNombre}</td>
                <td>${pedido.marca}</td>
                <td>${pedido.producto}</td>
                <td>${pedido.cantidad}</td>
                <td>${pedido.observaciones || '-'}</td>
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

function handleCargarVencimiento(event) {
    event.preventDefault();
    
    const clienteId = parseInt(document.getElementById('venc-cliente').value);
    const usuarios = JSON.parse(localStorage.getItem('sinergia_usuarios'));
    const cliente = usuarios.find(u => u.id === clienteId);

    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));
    const nuevoVencimiento = {
        id: vencimientos.length + 1,
        clienteId: clienteId,
        clienteNombre: cliente.nombre,
        factura: document.getElementById('venc-factura').value,
        monto: parseFloat(document.getElementById('venc-monto').value),
        fechaVencimiento: document.getElementById('venc-fecha').value
    };

    vencimientos.push(nuevoVencimiento);
    localStorage.setItem('sinergia_vencimientos', JSON.stringify(vencimientos));

    alert('Vencimiento cargado exitosamente');
    document.getElementById('vencimientos-form').reset();
    loadVencimientosList();
}

function loadVencimientosList() {
    const container = document.getElementById('vencimientos-list');
    const vencimientos = JSON.parse(localStorage.getItem('sinergia_vencimientos'));

    if (vencimientos.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No hay vencimientos cargados</p></div>';
        return;
    }

    let html = '<h3>Vencimientos Registrados</h3><table><thead><tr><th>Cliente</th><th>Factura</th><th>Monto</th><th>Vencimiento</th><th>Estado</th></tr></thead><tbody>';

    vencimientos.forEach(venc => {
        const diasHasta = Math.floor((new Date(venc.fechaVencimiento) - Date.now()) / (1000 * 60 * 60 * 24));
        let estado = '<span class="status-badge status-aprobado">Al día</span>';
        if (diasHasta < 0) {
            estado = '<span class="status-badge status-pendiente">Vencido</span>';
        } else if (diasHasta <= 7) {
            estado = '<span class="status-badge status-pendiente">Por vencer</span>';
        }

        html += `
            <tr>
                <td>${venc.clienteNombre}</td>
                <td>${venc.factura}</td>
                <td>$${venc.monto.toLocaleString()}</td>
                <td>${formatDate(venc.fechaVencimiento)}</td>
                <td>${estado}</td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
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
    }
}

function handleNuevoPedido(event) {
    event.preventDefault();

    const pedidos = JSON.parse(localStorage.getItem('sinergia_pedidos'));
    const nuevoPedido = {
        id: pedidos.length + 1,
        clienteId: currentUser.id,
        clienteNombre: currentUser.nombre,
        marca: document.getElementById('pedido-marca').value,
        producto: document.getElementById('pedido-producto').value,
        cantidad: parseInt(document.getElementById('pedido-cantidad').value),
        observaciones: document.getElementById('pedido-observaciones').value,
        fecha: new Date().toISOString(),
        estado: 'enviado'
    };

    pedidos.push(nuevoPedido);
    localStorage.setItem('sinergia_pedidos', JSON.stringify(pedidos));

    alert('Pedido enviado exitosamente');
    document.getElementById('pedido-form').reset();
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
        html += `
            <div class="card">
                <h3>Pedido #${pedido.id}</h3>
                <p><strong>Fecha:</strong> ${formatDate(pedido.fecha)}</p>
                <p><strong>Marca:</strong> ${pedido.marca}</p>
                <p><strong>Producto:</strong> ${pedido.producto}</p>
                <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
                <p><strong>Observaciones:</strong> ${pedido.observaciones || 'Ninguna'}</p>
                <p><strong>Estado:</strong> <span class="status-badge status-${pedido.estado}">${pedido.estado}</span></p>
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
});