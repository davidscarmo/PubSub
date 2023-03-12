exports.notificacao_pubsub = (event, context) => {
  const pubsubMessage = Buffer.from(event.data, 'base64').toString();
  if (pubsubMessage === 'ALARME') {
    console.log('Alarme Ativado!');
  } else {
    console.log('Alarme Desativado!');
  }
}
