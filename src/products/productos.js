const products = [
    {
    name:"TRATAMIENTO FITOTERAPEUTICO PANCREAS:",
    photo:"https://i.postimg.cc/VkkG0xN8/pancreas.png",
    description:`
    Diseñado para ayudar al
    organismo a convertir los
    alimentos en energía
    (deficiencias enzimáticas
    y endocrinas), en donde
    el páncreas es incapaz de
    producir insulina; regular
    la glucosa en la sangre
    (niveles de azúcar); el
    poder de las plantas y su
    uso medicinal no solo son
    capaces de prevenir sino
    también de curar, es un
    muy buen coadyuvante
    natural en el tratamiento

    de la
    Obesidad, Diabetes,
    prediabetes, Diabetes
    mellitus tipo1, Diabetes

    tipo 2. `
    },
    {
    name:"TRATAMIENTO FITOTERAPEUTICO COLON:",
    photo:"https://i.postimg.cc/qvJYXtjW/colon.png",
    description:`Está elaborado con la
    mejor calidad de plantas
    medicinales capaces de
    corregir y curar
    trastornos causados por
    daños en la flora
    intestinal, restaurándola
    y fortaleciendo su
    sistema inmunológico, ya
    que este medicamento
    ayuda a evacuar los
    desechos del intestino
    mejorando no solo la
    eliminación de las heces,
    sino el aprovechamiento
    de nutrientes,
    garantizando una mejor
    digestión, coadyuvante
    natural en tratamiento en
    trastornos intestinales,
    Principalmente en casos
    de colon perezoso,
    estreñimiento crónico,
    
    diarreas, hemorroides y flatulencia.
    Recomendación: Evitar el consumo de laxantes.`
    },
    {
    name:"TRATAMIENTO FITOTERAPÉUTICO DETOX:",
    photo:"https://i.postimg.cc/Gp95VW0Q/detox.png",
    description:`Nuestro organismo suele
    acumular muchos
    desechos tóxicos como
    son: metales pesados
    (plomo, mercurio,
    antimonio, arsénico etc.)
    toxinas como residuos de
    pesticidas tóxicos,
    polución, bebidas
    carbonadas ,
    electromagnética entre
    muchas otras , el cuidar y
    mantener una buena salud
    depende de eliminar de
    nuestro cuerpo las fuentes
    de enfermedad, un cuerpo
    libre de toxinas es capaz
    de regenerarse y curarse
    así mismo, por eso el
    medicamento HERBAL
    DETOX está diseñado
    para desintoxicar su
    cuerpo por completo de
    
    manera segura y natural.
    
    A que personas se les recomienda esta desintoxicación: personas que padecen de
    infecciones urinarias, trastornos gastrointestinales, hormonales, circulatorios,
    manchas en la piel y acné, afecciones respiratorias, obesidad; de cierta manera
    todas las personas necesitamos eliminar de nuestro cuerpo las causas de
    
    enfermedad.
    
    Que personas no pueden consumir HERBAL DETOX, personas con una baja
    
    inmunidad y/o muy descompensadas nutricionalmente.`
    },
    {
    name:"TRATAMIENTO FITOTERAPEUTICO RIÑON:",
    photo:"https://i.postimg.cc/VkZ7qKSb/ri-on.png",
    description:`Su fórmula Fito
    terapéutica fue
    diseñada para
    mantener sano
    nuestro sistema
    urinario eliminando
    arenilla al riñón, capaz
    de romper y evacuar
    los cálculos renales
    que puedan afectar el
    buen funcionamiento
    de las nefronas,
    evitando la retención
    de líquidos y
    previniendo
    infecciones urinarias,
    en mujeres evita las
    infecciones y daños
    en la vejiga al igual
    que en el hombre es
    muy eficaz en el tratamiento y cuidado de la próstata. Coadyuvante
    
    natural en el tratamiento del sistema urinario.
    No apto para personas en tratamiento con diálisis.`
    },  
    {
    name:"TRATAMIENTO FITOTERAPEUTICO MUCOSA:",
    photo:"https://i.postimg.cc/PxwFr15v/mucosa.png",
    description:`Fue creado para el
    tratamiento preventivo y
    curativo en enfermedades
    que atacan nuestro sistema
    digestivo.
    EL cual está dotado con
    mucosa digestiva
    asegurando la homeostasis
    interna, digestión, absorción
    de nutrientes, transporte,
    secreción de agua y
    electrolitos.
    La mucosa gastrointestinal:
    esta revestida de células
    epiteliales que establecen
    una barrera efectiva,
    mediante uniones
    intercelulares entre el medio
    interno y medio externo,
    impidiendo el paso de
    sustancias potencialmente
    nocivas.
    Coadyuvante natural en el
    tratamiento de gastritis,
    hernia hiatal, reflujo, acidez,
    colon irritable y demás
    enfermedades que puedan afectar el buen funcionamiento del sistema
    
    gastrointestinal.`
    },
    {
    name:"TRATAMIENTO FITOTERAPEUTICO CARTILAGO:",
    photo:"https://i.postimg.cc/L5FQqhJC/cartilago.png",
    description:`nuestro sistema articular, se
    deteriora no solo con la
    edad, las malas posturas, el
    esfuerzo físico entre muchas
    otras causas; a menudo
    ocurre una pérdida del
    líquido sinovial, un líquido
    espeso que se encuentra en
    el interior de la articulación y
    que tiene la función de
    amortiguar los extremos de
    los huesos y reducir la
    fricción entre las
    articulaciones, el
    medicamento herbal
    cartílago fue diseñado para
    mantener su sistema
    articular sano, gracias al
    poder curativo de las plantas
    medicinales capaces de
    eliminar de sus sistemas las
    fuentes directas que
    originan los trastornos
    articulares.
    Coadyuvante natural en el
    tratamiento de artrosis,
    artritis, reumatismo, gota, dolor e inflamación articular, entre muchas otras.`
    },
    {
    name:"TRATAMIENTO FITOTERAPEUTICO HIGADO:",
    photo:"https://i.postimg.cc/0yV4t84j/higado.png",
    description:`Elaborado con las
    mejores plantas
    medicinales capaces
    de curar y sanar de
    manera rápida, segura
    y eficaz, está diseñado
    para mejorar el
    metabolismo en el
    almacenamiento de
    vitaminas y minerales,
    liberación de glucosa,
    digestión de las grasas,
    producción de
    colesterol, proteínas y
    la eliminación de
    toxinas.
    Es recomendable para
    todo tipo de personas,
    coadyuvante natural en
    casos de obesidad,
    diabetes, hipertensión, triglicéridos o colesterol, esteatosis hepática,
    
    hepatitis, cirrosis Y hepatomegalia.
    
    El secreto de gozar de una buena salud, es un hígado sano.`
    }, 
    {
    name:"TRATAMIENTO FITOTERAPEUTICO OVARIO:",
    photo:"https://i.postimg.cc/CMb63C2W/ovario.png",
    description:`Este medicamento fue
    diseñado especialmente
    para la mujer en el
    cuidado preventivo y
    curativo en enfermedades
    ginecológicas que
    puedan causar daños y/o
    trastornos en el buen
    funcionamiento de
    ovarios, útero, cuello
    uterino, actúa como
    regulador hormonal de
    manera natural, segura y
    
    eficaz.
    Medicamento herbal
    útero: coadyuvante
    natural en el tratamiento
    ginecológico: ovarios
    poliquísticos, miomatosis,
    inflamación de cuello
    uterino, trastornos de la hormona beta (Ciclo menstrual), vaginitis,
    
    herpes, papiloma humano, etc.`
    },
    {
    name:"MEDICAMENTO HERBAL EQUINACEA :",
    photo:"https://i.postimg.cc/Vv9GX1MY/equinacea.png",
    description:`Actúa de manera
    natural, elevando
    las defensas y
    fortaleciendo el
    sistema
    inmunológico;
    Nuestro sistema
    inmunológico está
    diseñado para
    defendernos de los
    agentes patógenos
    que nos enferman,
    como lo son:
    hongos, bacterias,
    parásitos y toxinas
    que pueden afectar
    el buen desempeño
    de nuestros
    órganos,
    especialmente
    diseñado para
    aquellas personas
    que padecen
    trastornos de baja inmunidad. Muy efectivo coadyuvante natural en el
    
    tratamiento de enfermedades degenerativas.`
    },
    {
    name:"TRATAMIENTO FITOTERAPEUTICO ARTERIA C:",
    photo:"https://i.postimg.cc/kMSknP2Y/arteriac.png",
    description:`Nuestro sistema
    circulatorio lleva
    oxígeno, nutrientes y
    hormonas a las células,
    elimina el producto de
    los desechos, como el
    dióxido de carbono; por
    ello es tan importante
    cuidarlo de forma
    regular, el uso de las
    plantas medicinales y
    sus efectos curativos
    garantizan su buen
    funcionamiento, ya que
    son muchas las
    enfermedades que lo
    atacan de forma
    permanente, los malos
    hábitos de vida.
    La prevención es
    imprescindible, de esta manera protegerá, cuidara su vida y la de su
    corazón, coadyuvante natural en tratamiento arterial y del sistema
    
    cardiovascular.`
    }, 
    {
    name:"TRATAMIENTO FITOTERAPEUTICO ARTERIA G:",
    photo:"https://i.postimg.cc/Fsg8Lbgj/arteriag.png",
    description:`Las grasas no fluyen de manera ágil en el sistema circulatorio, por lo
    que no se lleva acabo
    adecuadamente la
    oxigenación del cuerpo y
    puede llevar a obstruir
    venas y arterias provocando
    el aumento del colesterol y
    los triglicéridos, riesgo del
    incremento de la tensión
    arterial, trombos y padecer
    una enfermedad
    cardiovascular. Las plantas
    medicinales y su consumo
    diariamente han demostrado
    ser muy eficaces en el
    tratamiento preventivo y
    curativo de nuestro sistema
    circulatorio, coadyuvante
    natural en el tratamiento de
    trombos, colesterol o
    triglicéridos elevados en la
    
    sangre.`
    },
    {
    name:"TRATAMIENTO FITOTERAPEUTICO PULMON:",
    photo:"https://i.postimg.cc/FsZCRrNp/pulmon.png",
    description:`Los pulmones nos permiten
    respirar la entrada de
    oxígeno a nuestros cuerpos y
    expulsar el dióxido de
    carbono, el cual es un
    desecho producido por el
    cuerpo. La naturaleza fue
    dotada con una gran
    variedad de plantas
    medicinales que aportan al
    cuerpo humano el poder de
    sanar; no maltrate su
    organismo, trátelo con
    respeto y de forma natural,
    para eso fue creada la
    medicina herbal.
    Las enfermedades del
    aparato respiratorio son
    causales del deterioro de nuestra salud y ponen en riesgo nuestra
    vida, el medicamento herbal pulmón es muy buen coadyuvante natural
    en el tratamiento preventivo y curativo de las vías respiratorias como:
    
    asma, bronquitis etc.`
    },
    {
    name:"TRATAMIENTO FITOTERAPEUTICO NEURO:",
    photo:"https://i.postimg.cc/N0VzcdBw/neuro.png",
    description:`Todas las personas
    hemos pasado por algún
    trastorno del sistema
    nervioso, bien sea por la
    pérdida de un familiar, la
    ruptura de una relación
    sentimental, la situación
    económica, la familia, el
    trabajo; todo desarreglo de
    la alud suele estar
    precedido por un periodo
    de fuerte stress, la
    ansiedad, la depresión, la
    baja autoestima, la ira, la
    falta de sueño, etc. El
    medicamento herbal
    Neuro es Muy buen
    Coadyuvante natural en
    mejorar y cuidar la salud
    
    mental.
    Contraindicado en
    personas bajo tratamiento
    
    con medicamentos psiquiátricos.`
    },   
]
module.exports = products