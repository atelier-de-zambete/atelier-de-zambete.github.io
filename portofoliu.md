---
layout: page
title: Portofoliu 
subtitle: Zâmbete Personalizate cu Tehnologie de Vârf
description: În Atelierul nostru de Zâmbete, punem accent pe inovație, dar și pe tradiția profesionalismului, fiind dedicați să transformăm fiecare zâmbet într-o capodoperă. Aici, fiecare lucrare devine o expresie a pasiunii noastre pentru perfecțiune și a dorinței de a oferi pacienților zâmbete sănătoase și de durată.	
permalink: portofoliu
---



<div class="container">
  <div class="row folio-list">
    {% assign servs = site.portofoliu %} 
    {% for serv in servs %}
    <div class="col-1-of-3 text-center">
      <a href="{{ serv.url }}.html">
        <img src="{{ serv.img }}" class="center rounded-corners" alt="{{ serv.categories | first }} {{ serv.title }}">
        <h2>{{ serv.categories | first }}</h2>
        <h3>{{ serv.title }}</h3>
      </a>
    </div>
    {% endfor %}
  </div>

</div>

