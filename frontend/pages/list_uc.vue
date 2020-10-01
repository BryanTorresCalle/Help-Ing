<template>
  <div class="container">
    <h1>Lista de Usuarios</h1>
    <b-card>
      <b-table
        stacked
        responsive
        :items="universalContents"
        
      >
        <template  v-slot:cell(icon)="data">
          
          <b-img :src="data.item.icon" width="100px" height="100px"></b-img>
         
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script src="../assets/list_uc.js" />



<style>
</style>