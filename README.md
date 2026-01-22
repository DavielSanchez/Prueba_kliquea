# **Prueba tecnica klikea**

## **Descripción del Proyecto**

PRUEBA TÉCNICA: CONSUMO DE API CON AUTENTICACION  

## **Características Técnicas**

### **Frontend:**

* **React (Vite)**: Framework para la interfaz de usuario.
* **Tailwind CSS**: Estilizado pixel-perfect siguiendo el diseño original de GitHub.
* **Zustand**: Gestión de estado global ligera y eficiente.
* **Lucide React**: Iconografía técnica.

### **Backend:**

* **Node.js & Express**: Servidor encargado de gestionar las peticiones y actuar como proxy.
* **Fetch**: Comunicación con la REST API de GitHub.
* **Dotenv**: Protección de credenciales sensibles.

## **Instalación**

### **Prerrequisitos**

- **Node.js** 18.0 o superior ([Descargar](https://nodejs.org/))
- **npm** 9.0 o superior (viene con Node.js)
- **Git** ([Descargar](https://git-scm.com/))

### **🔧 Pasos para Ejecutar**

#### **1. Clonar y Preparar el Proyecto**

```bash
# Clonar el repositorio
git clone https://github.com/DavielSanchez/Prueba_kliquea.git
cd prueba_kliquea
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

#### **3\. Configurar Variables de Entorno del Backend y el Frontend**

```bash

# Navegar a la carpeta backend
cd ../backend
# Crear archivo.env con las credenciales
PORT=3000
GITHUB_TOKEN=el_token_que_envie_por_correo
```

```bash

# Navegar a la carpeta frontend
cd ../frontend
# Crear archivo.env con las credenciales
VITE_API_URL=http://localhost:3000
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

## ** Acceso a la Aplicación**

Una vez ejecutado, accede a:

- **Frontend (Interfaz de Usuario)**: http://localhost:5173
- **Backend (API REST)**: http://localhost:3000

## ** Solución de Problemas Comunes**

### **1\. Error: "Puerto ya en uso"**

```bash

# Cambiar puerto del backend
# Editar backend/.env y cambiar PORT=3000 a otro valor
```

### **2\. Error: "Variables de entorno faltantes"**

```bash
# Asegurarse de que backend/.env existe con:
# PORT=3000
# GITHUB_TOKEN=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

# Asegurarse de que frontend/.env existe con:
# VITE_API_URL=http://localhost:3000
```

** ¡Gracias por revisar este proyecto!**
