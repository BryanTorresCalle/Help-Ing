<template>
  <div>
    <b-card
      border-variant="secondary"
      header-border-variant="secondary"
      header="      "
      align="left"
      title="Agregar contenido Universal"
    >
      <b-form action ="javascript:void(0)" @submit="createUC()">
        <b-form-group label="Título:" label-for="title">
          <b-form-input
            id="title"
            v-model="uc.title"
            
            required
            placeholder="Ingrese el título"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Autor:" label-for="author">
          <b-form-input
            id="author"
            v-model="uc.author"
            
            required
            placeholder="Ingrese el autor"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Url:" label-for="url">
          <b-form-input
            id="url"
            v-model="uc.url"
            
            
            placeholder="Ingrese la url del recurso externo"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Archivo:" label-for="file">
          <b-form-file
            id = "file"
            v-model="uc.file"
            :state="Boolean(uc.file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-form-group>
 <!--  <b-form-group label="Tipo:" label-for="tipos">
          <b-form-radio-group
            v-model="uc.type"
            :options="types"
            value-field="value"
            text-field="value"
            disabled-field="notEnabled"
            stacked
            required
          ></b-form-radio-group>
        </b-form-group>
 -->
      
         <b-form-group label="Icono:" label-for="icon">
          <b-form-input
            id="icon"
            v-model="uc.icon"
            
            required
            placeholder="Ingrese la url del icono"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        
      </b-form>
    </b-card>
  </div>
</template>

<script src="../assets/insert_uc.js" />
