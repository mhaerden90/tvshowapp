<template>
<div class="modal">
    <div class="modal-body">
     <h3> {{this.selectedItem.show.name}} </h3>
     <b>Language: </b>{{this.selectedItem.show.language}} <br>
     <b>Premiered: </b> {{this.selectedItem.show.premiered}} <br>
     <b>Official Site: </b>{{this.selectedItem.show.officialSite}}<br><br>
     <b> Summary </b> <br>
      {{cleanHTML(this.selectedItem.show.summary)}}
      </div>
    
    <h5>  </h5>

    <div class="modal-footer">
      <button class="button" @click="$emit('closeModal')">Close</button>
    </div>
</div>

</template>

<script>
export default {
  name: 'show-modal',
  props: {
    selectedItem:{}
  },
  methods:{
    //This method removes the html tags from the data that is delivered by the API
     cleanHTML (htmlstring){
      let html = htmlstring;
      let div = document.createElement("div");
      div.innerHTML = html;
      let text = div.textContent || div.innerText || "";
      return text;
    }
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  background: #FFFFFF;
  box-shadow: 1px 1px 10px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
    }

.modal-body {
  text-align: left;
  margin: 10px;
}

</style>
