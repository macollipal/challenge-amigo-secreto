# Amigo Secreto 🎁

Una aplicación web para organizar juegos de Amigo Secreto. Esta herramienta simple e interactiva te ayuda a gestionar los nombres de los participantes y seleccionar aleatoriamente las parejas para el intercambio de regalos.

## Características

- Añade participantes al intercambio de regalos
- Valida nombres duplicados y entradas vacías
- Selecciona aleatoriamente las parejas de Amigo Secreto
- Función de reinicio para comenzar de nuevo
- Interfaz de usuario limpia e intuitiva
- Diseño totalmente responsive
- Características de accesibilidad incluidas

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts (Inter & Merriweather)

## Estructura del Proyecto

```
amigo-secreto/
│
├── index.html
├── style.css
├── app.js
│
└── assets/
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## Uso

1. Ingresa los nombres de los participantes en el campo de entrada
2. Haz clic en "Añadir" para incluirlos en la lista
   ![image](https://github.com/user-attachments/assets/88b46421-0364-4a59-9eb5-f4ba293e3972)

3. Continúa añadiendo todos los participantes
   ![image](https://github.com/user-attachments/assets/95e9df69-0ba3-44ea-882f-2e57f11d52f3)

5. Haz clic en "Sortear amigo" para seleccionar aleatoriamente un Amigo Secreto
   ![image](https://github.com/user-attachments/assets/86772f3f-6787-46a0-8968-09b074b03555)

6. Usa "Reiniciar juego" para comenzar de nuevo

## Validación de Entrada

La aplicación incluye varias características de validación:
- Previene el envío de nombres vacíos
- Verifica nombres duplicados (sin distinguir entre mayúsculas y minúsculas)
- Requiere al menos 1 participante para el sorteo
