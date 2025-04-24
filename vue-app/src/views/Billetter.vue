<template>
    <nav class="category-buttons">
    <button>Billetter<br>underside</button>
    <button class="active">Gavekort<br>underside</button>
    <button>Sæsonkort<br>underside</button>
  </nav>

  <main>
    <section class="ticket-card">
      <div class="ticket-image">General kamp logo</div>
      <div class="ticket-details">
        <div>
          <p><strong>Kamp title</strong></p>
          <p>dato - lokation<br>Tidspunkt</p>
          <p>Pris</p>
        </div>
        <button class="buy-button">Køb billet</button>
      </div>
    </section>
  </main>

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>
  
<style scoped>
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: white;
  }
  
  
  
  .category-buttons {
    display: flex;
    justify-content: space-around;
    padding: 12px;
    background-color: #f2f2f2;
  }
  
  .category-buttons button {
    flex: 1;
    margin: 0 4px;
    padding: 10px;
    border: 1px solid #999;
    background-color: white;
    font-size: 14px;
  }
  
  
  .ticket-card {
    background-color: #e6e6e6;
    margin: 16px;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  
  .ticket-image {
    background-color: #ccc;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-size: 16px;
    text-align: center;
  }
  
  .ticket-details {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  
  .buy-button {
    align-self: flex-end;
    margin-top: 8px;
    padding: 6px 12px;
    background-color: white;
    border: 1px solid #999;
    cursor: pointer;
  }
  </style>