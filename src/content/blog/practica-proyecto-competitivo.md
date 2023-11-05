---
title: Practica Proyecto Competitivo
icon: logos:java
description: Documentación sobre la practica de Java competitiva. Aquí se explican los metodos y como se organizan. 
layout: "@/layouts/BlogLayout.astro"
date: 2023-11-05
tags:
  - Programación
---

## Pulmon Runners Software

## Datos
El programa trabajará sobre tres datos principales.

El primer dato principal serán las etapas. Son 4 etapas por lo que guardamos los kilometros en un Array de 4 posiciones, una por etapa.
```java
double[] = { 74.12, 63.89, 67.37, 84.03 }
```

El segundo, sera un ArrayList de Arrays, cada array (el String[]) hace referencia a un equipo
```java
// ArrayList donde se guardan todos los equipos
ArrayList<String[]> equipos;

// Array donde se guarda cada equipo
String[] equipo = {"Nombre Equipo", "Nombre corredor 1", "Nombre corredor 2"};

// Guardamos el equipo
equipos.add(equipo)
```
Basicamente, lo que contiene cada String[] es un equipo que se guarda en el ArrayList equipos.

Ahora para guardar el tiempo de cada equipo en una etapa, utilizaremos el tercer dato principal, que será este:

```java
// ArrayList donde se guardan todos los tiempos de cada etapa de los equipos
ArrayList<double[]> tiemposEtapa;

// Array donde se guarda cada el tiempo de cada equipo
double[] tiempoEtapa = new double[4];

// Guardamos el tiempo en el array
tiemposEtapa.add(tiempoEtapa)

```
Este Array tiene 4 posiciones, las cuales hacen referencia al tiempo que ha tardado cada equipo en una etapa.

## Metodos

1.  **Desarrollador 1**:
    
    -   Método `main`: Este desarrollador será responsable de la lógica principal del programa, incluyendo la invocación de los métodos necesarios en el orden correcto y la gestión de la salida del programa. Este método no toma ningún argumento y no devuelve nada.
2.  **Desarrollador 2**:
    
    -   Método `calcularKmh`: Este desarrollador implementará el método para calcular la velocidad media dado una distancia y un tiempo. Este método toma dos argumentos, una distancia (k) y un tiempo (h), y devuelve la velocidad media calculada como k/h.
    -   Método `calcularKmhEquipo`: Este desarrollador también implementará el método para calcular la velocidad media de un equipo. Este método toma un array de tiempos de un equipo como argumento y devuelve la velocidad media del equipo.
3.  **Desarrollador 3**:
    
    -   Método `clasificarEquipos`: Este desarrollador será responsable de implementar la lógica para clasificar los equipos basándose en sus tiempos medios. Este método toma dos `ArrayList` como argumentos, una para los equipos y otra para los tiempos. Devuelve un `ArrayList` de equipos clasificados en orden ascendente según sus tiempos medios.
    -   Método `redondearDecimales`: Este desarrollador también implementará el método para redondear un número a una cantidad específica de decimales. Este método toma dos argumentos, un número (n) y una cantidad de decimales, y devuelve el número redondeado a la cantidad especificada de decimales.
4.  **Desarrollador 4**:
    
    -   Método `corredorMasRapidoPorEtapa`: Este desarrollador será responsable de implementar la lógica para encontrar el corredor más rápido por etapa. Este método toma un `ArrayList` de tiempos como argumento y devuelve un array de índices. Cada índice en el array corresponde al corredor más rápido en una etapa específica.
    -   Método `calcularMedia`: Este desarrollador también implementará el método para calcular la media de un array de tiempos. Este método toma un array de tiempos como argumento y devuelve la media de los tiempos.

