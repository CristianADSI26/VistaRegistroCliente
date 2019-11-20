import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioPractica: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formularioPractica = this.formBuilder.group({

      nombre1: ["", [Validators.required]],
      nombre2: ["", [Validators.required]],
      apellido1: ["", [Validators.required]],
      apellido2: ["", [Validators.required]],
      tdocument: ["", [Validators.required]],
      document: ["", [Validators.required]],
      email: ["", [Validators.required]],
      genero: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      comentarios: ["", [Validators.required]],
      // NombrePropietario: ["", [Validators.required]],
      // ApellidoPropietario: [""],
    });

  }

  FuncionFormulario() {

    let texto = "";

    texto += (
      "Nombre: " + this.formularioPractica.controls['nombre1'].value + " " + this.formularioPractica.controls['nombre2'].value + "\n" +
      "Apellido: " + this.formularioPractica.controls['apellido1'].value + " " + this.formularioPractica.controls['apellido2'].value + "\n" +
      "Tipo de documento: " + this.formularioPractica.controls['tdocument'].value + "\n" +
      "Documento: " + this.formularioPractica.controls['document'].value + "\n" +
      "Genero: " + this.formularioPractica.controls['genero'].value + "\n" +
      "E-Mail: " + this.formularioPractica.controls['email'].value + "\n" +
      "Telefono: " + this.formularioPractica.controls['telefono'].value + "\n" +
      "Celular: " + this.formularioPractica.controls['celular'].value + "\n" +
      "Comentario: " + this.formularioPractica.controls['comentarios'].value
    );

    document.getElementById("persona").innerHTML = texto;

    // alert("Entro a la funcion")
    // alert(this.formularioPractica.controls['NombrePropietario'].value);
    // alert(this.formularioPractica.controls['ApellidoPropietario'].value);

  }

}
