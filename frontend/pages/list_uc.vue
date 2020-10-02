<template>
  <div class="container">
    
    <b-card title="Lista de Usuarios">
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