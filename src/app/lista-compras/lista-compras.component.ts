import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ItemComprado} from "./itenscompras"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  itemName?:string;
  listaDeItens: ItemComprado [] = [];   
  
  adicionarCompras(){
    let item = new ItemComprado;
    item.nome = this.itemName;
    item.id = this.listaDeItens.length + 1;
    if(this.itemName?.length != 0){
      this.listaDeItens.push(item);    
    }
    this.itemName = "";
  }

  riscarItem(itemLista : ItemComprado){
    itemLista.status = !itemLista.status; //faz a negação do status em que o item se encontra (false <> true)
  }

  limparLista(){
    this.listaDeItens = [];
  }
}
