---
title: Codigo Practica Proyecto Competitivo
icon: logos:java
description: Codido de cada integrante del equipo Asma Runners propuesto para resolver el ejercicio. 
layout: "@/layouts/BlogLayout.astro"
date: 2023-11-05
tags:
  - Programación
---

### Juan

```java
package Practica4;

import java.util.ArrayList;
import java.util.Arrays;

public class Practica {

 private static final double[] etapas = { 74.12, 63.89, 67.37, 84.03 };

 public static void main(String[] args) {
  ArrayList<String[]> equipos = new ArrayList<>();
  ArrayList<double[]> tiempos = new ArrayList<>();
  apuntarComponentes(equipos, tiempos);

  ArrayList<String[]> equiposClasificados = clasificarEquipos(equipos, tiempos);

  System.out.println("Los 3 primeros equipos son: ");
  for (int i = 0; i < 3; i++) {
   String[] equipo = equiposClasificados.get(i);
   double kmh = calcularKmhEquipo(tiempos.get(equipos.indexOf(equipo)));
   System.out.println("El equipo en la posicion " + (i + 1) + " es " + equipo[0]
     + " con una velocidad media de " + redondearDecimales(kmh, 2) + "km/h");
  }

  int[] indices = corredorMasRapidoPorEtapa(tiempos);
  for (int i = 0; i < indices.length; i++) {
   System.out.println(
     "El corredor más rápido en la etapa " + (i + 1) + " es " + equipos.get(indices[i])[i % 2 + 1]
       + " del equipo " + equipos.get(indices[i])[0] + " con una velocidad media de "
       + redondearDecimales(calcularKmh(etapas[i], tiempos.get(indices[i])[i]), 2) + " km/h.");
  }
 }

 public static void apuntarComponentes(ArrayList<String[]> equipos, ArrayList<double[]> tiempos) {
  equipos.add(new String[] { "Gustavo Runners", "Marta Diaz", "Peter" });
  tiempos.add(new double[] { 5.50, 4.30, 4.50, 6.30 });

  equipos.add(new String[] { "Luisa Speedsters", "Carlos Perez", "Anna" });
  tiempos.add(new double[] { 6.20, 5.10, 4.90, 7.00 });

  equipos.add(new String[] { "Juan Sprinters", "Elena Rodriguez", "Carlos" });
  tiempos.add(new double[] { 5.80, 4.70, 4.60, 6.50 });

  equipos.add(new String[] { "Laura Racers", "David Gomez", "Emma" });
  tiempos.add(new double[] { 5.90, 4.60, 4.70, 6.70 });

  equipos.add(new String[] { "Roberto Blazers", "Sara Gonzalez", "Michael" });
  tiempos.add(new double[] { 5.70, 4.40, 4.80, 6.90 });

  equipos.add(new String[] { "Diego Sprinters", "Olivia Smith", "Lucas" });
  tiempos.add(new double[] { 6.00, 4.50, 4.60, 6.80 });

  equipos.add(new String[] { "Maria Rushers", "Juan Martinez", "Sophia" });
  tiempos.add(new double[] { 5.60, 4.80, 4.90, 6.60 });

  equipos.add(new String[] { "Daniel Racers", "Paula Ruiz", "Liam" });
  tiempos.add(new double[] { 5.50, 4.90, 4.60, 6.40 });

  equipos.add(new String[] { "Natalia Blazers", "Hector Sanchez", "Isabella" });
  tiempos.add(new double[] { 5.80, 4.70, 4.70, 6.30 });

  equipos.add(new String[] { "Pablo Speedsters", "Eva Hernandez", "Noah" });
  tiempos.add(new double[] { 6.10, 5.00, 4.80, 6.20 });
 }

 private static ArrayList<String[]> clasificarEquipos(ArrayList<String[]> equipos, ArrayList<double[]> tiempos) {
  ArrayList<String[]> equiposOrdenados = new ArrayList<>(equipos);
  equiposOrdenados.sort((e1, e2) -> Double.compare(calcularMedia(tiempos.get(equipos.indexOf(e1))),
    calcularMedia(tiempos.get(equipos.indexOf(e2)))));
  return equiposOrdenados;
 }
 
 /* 
  * equiposOrdenados.sort((e1, e2) -> {
         // Para cada equipo, obtenemos su índice en la lista original
         int indiceE1 = equipos.indexOf(e1);
         int indiceE2 = equipos.indexOf(e2);
         
         // Utilizamos el índice para obtener los tiempos del equipo
         double[] tiemposE1 = tiempos.get(indiceE1);
         double[] tiemposE2 = tiempos.get(indiceE2);
         
         // Calculamos la media de los tiempos de cada equipo
         double mediaE1 = calcularMedia(tiemposE1);
         double mediaE2 = calcularMedia(tiemposE2);
         
         // Comparamos las medias de los tiempos de los equipos
         return Double.compare(mediaE1, mediaE2);
     });
  * */

 private static double calcularKmh(double k, double h) {
  return k / h;
 }

 private static double calcularKmhEquipo(double[] tiempoEquipo) {
  double kmhTotal = Arrays.stream(etapas).sum();
  double tiempoTotal = Arrays.stream(tiempoEquipo).sum();
  return calcularKmh(kmhTotal, tiempoTotal);
 }

 private static double redondearDecimales(double n, int cantidad) {
  double decimales = Math.pow(10.0, cantidad);

  return Math.round(n * decimales) / decimales;
 }

 public static int[] corredorMasRapidoPorEtapa(ArrayList<double[]> tiempos) {
  int[] indices = new int[etapas.length];
  for (int i = 0; i < etapas.length; i++) {
   double minTiempo = Double.MAX_VALUE;
   int minIndex = -1;
   for (int j = 0; j < tiempos.size(); j++) {
    if (tiempos.get(j)[i] < minTiempo) {
     minTiempo = tiempos.get(j)[i];
     minIndex = j;
    }
   }
   indices[i] = minIndex;
  }
  return indices;
 }

 private static double calcularMedia(double[] tiempos) {
  double sum = 0;
  for (double tiempo : tiempos) {
   sum += tiempo;
  }
  return sum / tiempos.length;
 }
}
```

### Peter

```java
package proyecto;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class proyecto {

 public static void main(String[] args) {

  Scanner texto = new Scanner(System.in);

  double[] ArrayKm = { 74.12, 63.89, 67.37, 84.03 };
  double KmTotal = ArrayKm[0] + ArrayKm[1] + ArrayKm[2] + ArrayKm[3];
  ArrayList<String[]> equipos = new ArrayList<String[]>();
  ArrayList<double[]> tiempos = new ArrayList<double[]>();
  int[] rapidos = { 0, 0, 0, 0 };

  apuntarComponentes(equipos, tiempos);

  double[] KmhEquipos = new double[equipos.size()];

  for (int x = 0; x < tiempos.size(); x++) {
   KmhEquipos[x] = calcularKmhEquipo(tiempos.get(x), KmTotal);
  }

  double[] KmhEquiposOrd = KmhEquipos.clone();
  Arrays.sort(KmhEquiposOrd);

  for (int x = 0; x < 4; x++) {
   for (int i = 0; i < tiempos.size(); i++) {
    if (tiempos.get(i)[x] < tiempos.get(rapidos[x])[x])
     rapidos[x] = i;
   }
  }

  System.out.println(rapidos[0] + " " + rapidos[1] + " " + rapidos[2] + " " + rapidos[3]);
  DecimalFormat d = new DecimalFormat("#.##");

  System.out.println("La 1º posición es para " + clasificarEquipos(equipos, tiempos).get(0)[0]
    + " con una media de " + d.format(KmhEquiposOrd[equipos.size() - 1]) + " Km/h.");
  System.out.println("La 2º posición es para " + clasificarEquipos(equipos, tiempos).get(1)[0]
    + " con una media de " + d.format(KmhEquiposOrd[equipos.size() - 2]) + " Km/h.");
  System.out.println("La 3º posición es para " + clasificarEquipos(equipos, tiempos).get(2)[0]
    + " con una media de " + d.format(KmhEquiposOrd[equipos.size() - 3]) + " Km/h.");
  System.out.println("El corredor mas veloz de la 1º Etapa es " + equipos.get(rapidos[0])[1]
    + " con una media de " + d.format(calcularKmh(ArrayKm[0], tiempos.get(rapidos[0])[0])) + " Km/h.");
  System.out.println("El corredor mas veloz de la 2º Etapa es " + equipos.get(rapidos[1])[2]
    + " con una media de " + d.format(calcularKmh(ArrayKm[1], tiempos.get(rapidos[1])[1])) + " Km/h.");
  System.out.println("El corredor mas veloz de la 3º Etapa es " + equipos.get(rapidos[2])[1]
    + " con una media de " + d.format(calcularKmh(ArrayKm[2], tiempos.get(rapidos[2])[2])) + " Km/h.");
  System.out.println("El corredor mas veloz de la 4º Etapa es " + equipos.get(rapidos[3])[2]
    + " con una media de " + d.format(calcularKmh(ArrayKm[3], tiempos.get(rapidos[3])[3])) + " Km/h.");
 }

 public static void apuntarComponentes(ArrayList<String[]> equipos, ArrayList<double[]> tiempos) {
  equipos.add(new String[] { "Gustavo Runners", "Marta Diaz", "Peter" });
  tiempos.add(new double[] { 5.50, 4.30, 4.50, 6.30 });

  equipos.add(new String[] { "Luisa Speedsters", "Carlos Perez", "Anna" });
  tiempos.add(new double[] { 6.20, 5.10, 4.90, 7.00 });

  equipos.add(new String[] { "Juan Sprinters", "Elena Rodriguez", "Carlos" });
  tiempos.add(new double[] { 5.80, 4.70, 4.60, 6.50 });

  equipos.add(new String[] { "Laura Racers", "David Gomez", "Emma" });
  tiempos.add(new double[] { 5.90, 4.60, 4.70, 6.70 });

  equipos.add(new String[] { "Roberto Blazers", "Sara Gonzalez", "Michael" });
  tiempos.add(new double[] { 5.70, 4.40, 4.80, 6.90 });

  equipos.add(new String[] { "Diego Sprinters", "Olivia Smith", "Lucas" });
  tiempos.add(new double[] { 6.00, 4.50, 4.60, 6.80 });

  equipos.add(new String[] { "Maria Rushers", "Juan Martinez", "Sophia" });
  tiempos.add(new double[] { 5.60, 4.80, 4.90, 6.60 });

  equipos.add(new String[] { "Daniel Racers", "Paula Ruiz", "Liam" });
  tiempos.add(new double[] { 5.50, 4.90, 4.60, 6.40 });

  equipos.add(new String[] { "Natalia Blazers", "Hector Sanchez", "Isabella" });
  tiempos.add(new double[] { 5.80, 4.70, 4.70, 6.30 });

  equipos.add(new String[] { "Pablo Speedsters", "Eva Hernandez", "Noah" });
  tiempos.add(new double[] { 6.10, 5.00, 4.80, 6.20 });
 }

 public static double calcularKmh(Double km, Double tiempos) {
  return km / tiempos;
 }

 public static double calcularKmhEquipo(double[] tiempos, Double KmTotal) {
  double tiempoTotal = tiempos[0] + tiempos[1] + tiempos[2] + tiempos[3];
  return calcularKmh(KmTotal, tiempoTotal);
 }

 private static ArrayList<String[]> clasificarEquipos(ArrayList<String[]> equipos, ArrayList<double[]> tiempos) {
  ArrayList<String[]> equiposOrdenados = new ArrayList<>(equipos);
  equiposOrdenados.sort((e1, e2) -> Double.compare(calcularMedia(tiempos.get(equipos.indexOf(e1))),
    calcularMedia(tiempos.get(equipos.indexOf(e2)))));
  return equiposOrdenados;
 }

 private static double calcularMedia(double[] tiempos) {
  double sum = 0;
  for (double tiempo : tiempos) {
   sum += tiempo;
  }
  return sum / tiempos.length;
 }
}
```

Nos falta el codigo de nuestros compañeros Jorge y David
