# **📋 Prueba tecnica klikea**

## **🏆 Descripción del Proyecto**

Sistema para la gestión de tarjetas de crédito que incluye:

- **Frontend**: Aplicación React con validaciones en tiempo real y diseño responsivo
- **Backend**: API RESTful con Express.js y Supabase (PostgreSQL)
- **Base de Datos**: PostgreSQL en la nube mediante Supabase (YA CONFIGURADA)
- **Características**: CRUD completo, validaciones, diseño interactivo, persistencia de datos

## **📈 Características Técnicas**

### **Frontend:**

- **Framework**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Validaciones**: Custom hooks y funciones puras
- **Estado**: React Hooks (useState, useEffect, useMemo)
- **HTTP Client**: Fetch API
- **Notificaciones**: React Toastify
- **Routing**: React Router (si se expande)

### **Backend:**

- **Runtime**: Node.js + Express.js
- **Base de Datos**: Supabase (PostgreSQL)
- **ORM**: Supabase JS Client
- **Validaciones**: Express Validator
- **Seguridad**: CORS, Helmet
- **Logging**: Morgan
- **Variables de entorno**: Dotenv

## **🚀 Instalación**

### **📋 Prerrequisitos**

- **Node.js** 18.0 o superior ([Descargar](https://nodejs.org/))
- **npm** 9.0 o superior (viene con Node.js)
- **Git** ([Descargar](https://git-scm.com/))

### **🔧 Pasos para Ejecutar**

#### **1. Clonar y Preparar el Proyecto**

```bash
# Clonar el repositorio
git clone https://github.com/DavielSanchez/credit_card.git
cd credit_card
```

#### **2\. Instalar Dependencias**

```bash
# Puedes instalar todo los paquetes
npm run install-all

# O instala todo por separado

npm install

# Instalar dependencias del backend
cd backend
npm install
# Instalar dependencias del frontend
cd ../frontend
npm install
```

#### **3\. Configurar Variables de Entorno del Backend**

```bash

# Navegar a la carpeta backend
cd ../backend
# Crear archivo.env con las credenciales
PORT=5000
SUPABASE_URL=https://kpbbjkyouenjwcwhgupr.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwYmJqa3lvdWVuandjd2hndXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTMzMjcsImV4cCI6MjA4MDk2OTMyN30.pnu8rnShUe2wpj_gwGx53lx1QK84ICZvheh8p59CGbw
NODE_ENV=development
```

#### **4\. Ejecutar el Sistema**

```bash
# Regresar a la raíz del proyecto
cd ..
# Método 1: Usar el script de inicio (RECOMENDADO)
npm run dev
# Método 2: Ejecutar servicios por separado
# Terminal 1:
cd backend
npm run dev
 # Terminal 2:
cd ../frontend
npm run dev
```

## **🌐 Acceso a la Aplicación**

Una vez ejecutado, accede a:

- **Frontend (Interfaz de Usuario)**: http://localhost:5173
- **Backend (API REST)**: http://localhost:5000

## **🔍 Características Implementadas**

### **🎯 Primer Bloque - Frontend (100% Completado)**

- ✅ **Formulario interactivo** con validaciones en tiempo real
- ✅ **Tarjeta visual** que se actualiza mientras escribes
- ✅ **Validaciones completas**:
  - Número de tarjeta (16 dígitos, solo números)
  - Fecha de vencimiento (formato MM/YY, meses 01-12, años válidos)
  - Nombre del titular (solo letras y tildes, máximo 20 caracteres)
  - CVV (3-4 dígitos)

- ✅ **Tabla de tarjetas** con paginación
- ✅ **Números enmascarados** en la lista (ej: 41\*\* \*\*\*\* \*\*\*\* 1234)
- ✅ **Loader de pantalla completa** durante operaciones
- ✅ **Notificaciones Toast** para confirmaciones y errores

### **⚙️ Segundo Bloque - Backend (100% Completado)**

- ✅ **API RESTful completa** (CRUD: GET, POST, PUT, DELETE)
- ✅ **Base de datos PostgreSQL** en Supabase (YA CONFIGURADA)
- ✅ **Validación de campos requeridos**
- ✅ **Códigos HTTP apropiados** (200, 201, 400, 404, 500)
- ✅ **Manejo de errores robusto**
- ✅ **CORS configurado** para comunicación frontend-backend

## **⚠️ Solución de Problemas Comunes**

### **1\. Error: "Puerto ya en uso"**

```bash

# Cambiar puerto del backend
# Editar backend/.env y cambiar PORT=5000 a otro valor
# Luego actualizar frontend/src/api/cardService.js con el nuevo puerto   `
```

### **2\. Error: "Variables de entorno faltantes"**

```bash
# Asegurarse de que backend/.env existe con:
# SUPABASE_URL=https://kpbbjkyouenjwcwhgupr.supabase.co
# SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...   `
```

### **3\. La aplicación carga pero no muestra tarjetas**

```bash
# Verificar la consola del navegador (F12)
```

## **📱 Uso de la Aplicación**

### **Agregar una Tarjeta:**

1.  Completa todos los campos del formulario
2.  Observa cómo la tarjeta se actualiza en tiempo real
3.  Haz clic en "Agregar Tarjeta"
4.  Verifica que aparezca en la tabla inferior

### **Eliminar una Tarjeta:**

1.  En la tabla, haz clic en "Eliminar" junto a la tarjeta
2.  Confirma la eliminación
3.  La tarjeta desaparecerá de la lista

### **Validaciones Automáticas:**

- El número de tarjeta se formatea automáticamente (4 grupos de 4 dígitos)
- La fecha se formatea como MM/YY automáticamente
- El nombre se convierte a mayúsculas
- Mensajes de error aparecen debajo de cada campo inválido

## **🔐 Credenciales Pre-Configuradas**

**Base de Datos Supabase:**

- **URL**: https://kpbbjkyouenjwcwhgupr.supabase.co
- **Tabla**: cards (ya creada con todas las columnas necesarias)
- **Políticas**: RLS configurado para permitir todas las operaciones

**No necesitas crear una cuenta ni configurar nada adicional.**

## **🎯 Puntos Fuertes del Proyecto**

1.  **✅ 100% Funcional** - Todo lo solicitado está implementado
2.  **✅ Pre-configurado** - No requiere configuración adicional
3.  **✅ Código Limpio** - Buenas prácticas y estructura modular
4.  **✅ Documentación Completa** - Instrucciones claras paso a paso
5.  **✅ UI/UX Mejorada** - Loader, notificaciones, validaciones visuales
6.  **✅ Base de Datos Real** - PostgreSQL en la nube (no local)
7.  **✅ Error Handling** - Manejo robusto de errores en frontend y backend

**⭐ ¡Gracias por revisar este proyecto!**
