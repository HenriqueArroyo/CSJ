Relatório Piano

O projeto do Piano consiste em uma aplicação JavaScript que permite aos usuários tocar notas musicais clicando em elementos HTML ou pressionando teclas do teclado, com cada tecla ou elemento produzindo um som correspondente. O projeto é composto por várias funcionalidades interativas e desafios enfrentados durante o desenvolvimento.

Principais Funcionalidades do Projeto:

Reprodução de Sons: A função playSound(note) é responsável por tocar os sons associados a notas musicais. Ela cria elementos de áudio dinamicamente e reproduz os sons com base na nota passada como argumento.

Mapeamento de Teclas: O projeto implementa um mapeamento de teclas do teclado para notas musicais usando o objeto keyMap. Isso permite que cada tecla corresponda a uma nota específica.

Feedback Visual: A classe 'active' é adicionada aos elementos quando pressionados ou clicados, fornecendo um feedback visual claro para o usuário.

Desafios Enfrentados durante o Desenvolvimento:

Mapeamento de Teclas: O mapeamento de teclas do teclado para notas musicais exigiu um cuidadoso planejamento e implementação para garantir que as teclas correspondessem às notas desejadas.

Feedback Visual: Criar um feedback visual adequado para os usuários, como destacar as teclas quando pressionadas ou clicadas, foi um desafio importante devido à dinâmica de interação.

Gestão de Eventos: Gerenciar eventos de mouse e teclado e garantir que as ações fossem executadas corretamente em resposta às interações do usuário representou um desafio de lógica e programação.

Relatório Cronômetro

O projeto do Cronômetro Digital consiste em uma aplicação JavaScript que permite aos usuários medir o tempo decorrido em horas, minutos e segundos, além de iniciar, pausar e parar o cronômetro. O código envolve a manipulação do tempo, atualização dinâmica da interface do usuário e controle de eventos de clique e teclado.

Principais Funcionalidades do Projeto:
Função doisDigitos(digito):

Garante que os números de horas, minutos e segundos sejam sempre exibidos com dois dígitos.
Isso melhora a apresentação visual do cronômetro.
Função iniciar():

Inicia o cronômetro chamando a função relogio().
Define um intervalo de atualização de 10 milissegundos para chamar a função relogio() periodicamente.
Isso faz com que o cronômetro seja atualizado a cada 10 milissegundos, dando a impressão de um cronômetro em execução.
Função pausar():

Pausa o cronômetro, interrompendo o intervalo definido anteriormente.
Impede que o cronômetro continue a ser atualizado.
Função parar():

Interrompe o cronômetro da mesma forma que a função pausar().
Reinicia os atributos de tempo (segundos, minutos, horas) para zero.
Exibe uma mensagem pop-up com o tempo decorrido antes de parar o cronômetro.
Reinicia a exibição do cronômetro na página para '00:00:00'.

Função relogio():
Incrementa os segundos, minutos e horas de acordo com a dinâmica de tempo.
Quando os segundos atingem 60, são reiniciados para 0 e os minutos são incrementados.
O mesmo acontece quando os minutos atingem 60; as horas são incrementadas e os minutos reiniciam.
Atualiza dinamicamente o elemento HTML com a exibição formatada do tempo.

Desafios Enfrentados durante o Desenvolvimento:

Atualização Dinâmica do Tempo: Garantir que o cronômetro atualizasse a cada 10 milissegundos sem sobrecarregar o navegador foi um desafio. O uso de intervalos foi uma solução eficaz.

Formatação do Tempo: Garantir que o tempo fosse exibido com dois dígitos (por exemplo, '02' em vez de '2') envolveu a criação de uma função para formatação.
