# 📘 GUÍA RÁPIDA DE USO - Sinergia Comercial

## Para Marcelo Busso (Administrador)

### 🔐 Acceso al Sistema
- **Usuario:** `admin`
- **Contraseña:** `admin123`

---

## 🎯 FUNCIONES PRINCIPALES

### 1️⃣ GESTIÓN DE CATÁLOGOS

**Dónde:** Sección "Marcas" en el sitio principal

**Cómo usar:**
1. Cada marca tiene un botón "📖 Ver Catálogo"
2. Los catálogos muestran 12 productos por página
3. Navegación con botones Anterior/Siguiente y números de página
4. Los clientes pueden ver todos los productos sin login

**Para actualizar productos:**
- Editar el archivo `script.js`
- Buscar el objeto `catalogoProductos`
- Agregar/modificar productos según la marca

---

### 2️⃣ GESTIÓN DE PEDIDOS

**Dónde:** Panel Administrador → Sección "Pedidos"

**Estados de Pedidos:**
- 🟡 **Pendiente:** Pedido recién enviado por el cliente
- 🔵 **En Proceso:** Marcelo está procesando el pedido
- 🟠 **Facturado:** Ya se generó la factura
- 🟢 **Pagado:** El cliente pagó la factura

**Acciones:**
1. Ver todos los pedidos con su código único (ej: `PED-1739517920341-XY2K8`)
2. Clic en **"Procesar"** para cambiar de "Pendiente" a "En Proceso"
3. El sistema vincula automáticamente cuando cargues la factura

**Tip:** El código único sirve para que el cliente pueda consultar su pedido por WhatsApp/teléfono

---

### 3️⃣ CARGAR FACTURAS (Vencimientos)

**Dónde:** Panel Administrador → Sección "Vencimientos"

**Cómo cargar una factura:**
1. Seleccionar el cliente del dropdown
2. Ingresar número de factura (ej: `FC-001-00131`)
3. Ingresar monto (ej: `25000`)
4. Seleccionar fecha de vencimiento
5. Clic en **"Cargar Vencimiento"**

**⚡ Automatización Inteligente:**
- Si el cliente tiene un pedido "En Proceso", el sistema lo vincula automáticamente
- El pedido cambia de estado a "Facturado"
- Recibirás una confirmación con el código del pedido vinculado

---

### 4️⃣ EDITAR FACTURAS

**Dónde:** Panel Administrador → Sección "Vencimientos"

**Cuándo usar:**
- Te equivocaste en el número de factura
- El monto está incorrecto
- Necesitas cambiar la fecha de vencimiento

**Cómo editar:**
1. Buscar la factura en la lista (solo facturas pendientes/no pagadas)
2. Clic en botón **"Editar"** (color naranja)
3. **Confirmación de seguridad:** Ingresar usuario y contraseña de admin
4. Modificar los datos necesarios
5. Clic en **"Guardar Cambios"**

**Seguridad:** Solo tú puedes editar facturas, nadie más tiene acceso

---

### 5️⃣ MARCAR FACTURAS COMO PAGADAS

**Dónde:** Panel Administrador → Sección "Vencimientos"

**Cómo hacerlo:**
1. Buscar la factura pagada en la lista
2. Clic en botón **"Marcar Pagada"** (color verde)
3. Confirmar

**⚡ Automatización:**
- El pedido vinculado cambia automáticamente a estado "Pagado"
- Se registra la fecha de pago
- La factura desaparece de las alertas

---

### 6️⃣ SISTEMA DE ALERTAS

**Dónde:** Panel Administrador → Sección "Alertas" (primera pantalla)

**Qué muestra:**
- 📅 Facturas próximas a vencer (7 días o menos)
- ⏰ Facturas vencidas
- 😴 Clientes inactivos (más de 60 días sin pedidos)

**Colores de Alerta:**
- 🔴 Rojo: Urgente (facturas vencidas)
- 🟠 Naranja: Atención (por vencer pronto)
- 🔵 Azul: Información (clientes inactivos)

---

### 7️⃣ APROBAR NUEVOS CLIENTES

**Dónde:** Panel Administrador → Sección "Aprobaciones Pendientes"

**Cómo aprobar:**
1. Ver la información del cliente (nombre, empresa, email, teléfono)
2. Clic en **"Aprobar"** si todo está bien
3. O clic en **"Rechazar"** si no cumple requisitos

**Tip:** Los clientes no pueden hacer pedidos hasta que los apruebes

---

## 👤 PARA CLIENTES

### 🔐 Cómo Registrarse
1. Clic en **"Acceso Clientes"** en el menú superior
2. Clic en **"Regístrate aquí"**
3. Completar formulario con:
   - Nombre completo
   - Nombre de empresa
   - Email y teléfono
   - Usuario y contraseña personalizados
4. Esperar aprobación de Marcelo

### 📦 Cómo Hacer un Pedido
1. Iniciar sesión con usuario y contraseña
2. En el portal, ir a **"Nuevo Pedido"**
3. Seleccionar:
   - Marca (ej: Fantoche)
   - Producto (se cargan automáticamente según la marca)
   - Cantidad y unidad
   - Observaciones (opcional)
4. Clic en **"Enviar Pedido"**
5. **Guardar el código único** que aparece (ej: `PED-1739517920341-XY2K8`)

### 📊 Ver Estado de Pedidos
1. En el portal, ir a **"Mis Pedidos"**
2. Ver historial completo con:
   - Código del pedido
   - Fecha
   - Productos
   - Estado actual (Pendiente, En Proceso, Facturado, Pagado)

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### ❓ "No puedo ver los productos en el catálogo"
**Solución:** Asegúrate de que JavaScript esté habilitado en el navegador

### ❓ "El botón 'Procesar' no aparece en pedidos"
**Solución:** Solo aparece en pedidos con estado "Pendiente"

### ❓ "No puedo editar una factura pagada"
**Solución:** Por seguridad, solo se pueden editar facturas pendientes

### ❓ "La vinculación automática no funciona"
**Solución:** El cliente debe tener un pedido en estado "En Proceso" para que se vincule

### ❓ "Olvidé el código de un pedido"
**Solución:** Como admin, lo puedes ver en la sección "Pedidos" en la primera columna

---

## 📞 CONTACTO TÉCNICO

Para soporte o mejoras:
**EDEN SoftWork**

---

## 🔄 ACTUALIZACIONES FUTURAS SUGERIDAS

1. **Reportes en PDF/Excel**
   - Exportar lista de pedidos
   - Exportar facturas pendientes
   - Reportes de ventas por marca

2. **Notificaciones por Email**
   - Avisar a clientes cuando cambia el estado del pedido
   - Recordatorios automáticos de facturas por vencer

3. **Estadísticas Visuales**
   - Gráficos de ventas
   - Productos más vendidos
   - Clientes más activos

4. **App Móvil Nativa**
   - Aplicación para Android/iOS
   - Notificaciones push
   - Acceso offline a catálogos

---

**¡El sistema está listo para usar! Cualquier duda, consultar este manual.** 📚
