// - Unknown
// Indica que não sabemos o tipo de dados que pode ser passado. Diferente do any, o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida.

// any VS unknown
// any: assume que pode ser qualquer tipo de dado
//unknown: não assume nada que o tipo possa ser( então pra usar qualquer metodo ou propriedade, tem que ser feita uma typeGuard, se não ele não permite)

// exemplo usando any.
function typeGuardAny(value: any) {
  return value.toUpperCase();
}
typeGuardAny("Origamid");
typeGuardAny(200); //Erro no runtime - TypeError: value.toUpperCase is not a function

// exemplo usando unknown.
function typeGuardUnknown(value: unknown) {
  return value.toUpperCase();
}
typeGuardUnknown("Origamid");
typeGuardUnknown(200);

//basicamente os dois deixam passar qualquer valor mas o any o erro só vai ver no runtime e o unknown mostra possíveis erros durante o uso onde não existem verificações o que acaba precavendo e não faz gerar erro no runtime
