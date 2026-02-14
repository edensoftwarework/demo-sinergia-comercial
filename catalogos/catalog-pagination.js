// Sistema de paginación para catálogos
class CatalogoPaginado {
    constructor(productos, productosPorPagina = 12) {
        this.productos = productos;
        this.productosPorPagina = productosPorPagina;
        this.paginaActual = 1;
        this.totalPaginas = Math.ceil(productos.length / productosPorPagina);
    }

    obtenerProductosPagina(numeroPagina) {
        const inicio = (numeroPagina - 1) * this.productosPorPagina;
        const fin = inicio + this.productosPorPagina;
        return this.productos.slice(inicio, fin);
    }

    renderizarProductos(numeroPagina) {
        this.paginaActual = numeroPagina;
        const productos = this.obtenerProductosPagina(numeroPagina);
        const container = document.getElementById('products-container');
        
        if (productos.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No hay productos disponibles</p></div>';
            return;
        }

        let html = '';
        productos.forEach(producto => {
            html += `
                <div class="product-card">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                </div>
            `;
        });

        container.innerHTML = html;
        this.renderizarPaginacion();
        
        // Scroll suave al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderizarPaginacion() {
        const container = document.getElementById('pagination-container');
        
        if (this.totalPaginas <= 1) {
            container.style.display = 'none';
            return;
        }

        let html = `
            <button onclick="catalogo.irAPagina(${this.paginaActual - 1})" ${this.paginaActual === 1 ? 'disabled' : ''}>
                ← Anterior
            </button>
        `;

        // Mostrar botones de páginas
        const rangoInicio = Math.max(1, this.paginaActual - 2);
        const rangoFin = Math.min(this.totalPaginas, this.paginaActual + 2);

        if (rangoInicio > 1) {
            html += `<button onclick="catalogo.irAPagina(1)">1</button>`;
            if (rangoInicio > 2) {
                html += `<span class="pagination-info">...</span>`;
            }
        }

        for (let i = rangoInicio; i <= rangoFin; i++) {
            html += `
                <button 
                    onclick="catalogo.irAPagina(${i})" 
                    class="${i === this.paginaActual ? 'active' : ''}">
                    ${i}
                </button>
            `;
        }

        if (rangoFin < this.totalPaginas) {
            if (rangoFin < this.totalPaginas - 1) {
                html += `<span class="pagination-info">...</span>`;
            }
            html += `<button onclick="catalogo.irAPagina(${this.totalPaginas})">${this.totalPaginas}</button>`;
        }

        html += `
            <button onclick="catalogo.irAPagina(${this.paginaActual + 1})" ${this.paginaActual === this.totalPaginas ? 'disabled' : ''}>
                Siguiente →
            </button>
        `;

        html += `<span class="pagination-info">Página ${this.paginaActual} de ${this.totalPaginas}</span>`;

        container.innerHTML = html;
    }

    irAPagina(numeroPagina) {
        if (numeroPagina < 1 || numeroPagina > this.totalPaginas) return;
        this.renderizarProductos(numeroPagina);
    }
}

// Variable global para el catálogo
let catalogo;
