document.getElementById('leadForm').addEventListener('submit',function(e){
    e.preventDefault();
    const fd=new FormData(this);
    const msg=`🍔 NOVO LEAD - SISTEMA LANCHONETE
  Estabelecimento: ${fd.get('estabelecimento')}
  Responsável: ${fd.get('nome')}
  WhatsApp: ${fd.get('whatsapp')}
  Email: ${fd.get('email')}
  Desafio: ${fd.get('desafio')}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`);
    window.location='obrigado.html';
  });

  // BANCO DE PERGUNTAS/RESPOSTAS
const faq = [
    {
      keywords: ['preco', 'valor', 'custa', 'quanto'],
      answer: '👉 O sistema tem um investimento único acessível. Após entender suas necessidades, envio um orçamento personalizado no WhatsApp. Deseja receber?'
    },
    {
      keywords: ['prazo', 'entrega', 'quando'],
      answer: '🚀 Em 3 dias úteis seu sistema está no ar! Inclui configuração completa e suporte inicial.'
    },
    {
      keywords: ['whatsapp', 'pedido'],
      answer: '📱 Seus clientes fazem pedido pelo WhatsApp, você recebe tudo organizado no painel. Sem app extra, sem comissão!'
    },
    {
      keywords: ['pix', 'pagamento'],
      answer: '💳 PIX integrado: o cliente paga na hora, o dinheiro cai direto na sua conta. Sem intermediários.'
    },
    {
      keywords: ['suporte', 'ajuda'],
      answer: '🎯 Suporte por WhatsApp vitalício. Respondemos em até 2 horas em dias úteis.'
    },
    {
      keywords: ['demo', 'demonstracao', 'testar'],
      answer: '🎥 Posso marcar uma demonstração rápida (15 min) pelo WhatsApp. Quer agendar?'
    },
    {
      keywords: ['cardapio', 'produto'],
      answer: '📋 Cardápio digital ilimitado: fotos, descrições, preços, combos. Atualizações instantâneas.'
    },
    {
      keywords: ['comeco', 'comecar', 'inicio'],
      answer: '💡 Primeiro vejo suas necessidades, depois preparo proposta personalizada. Topa conversar?'
    }
  ];
  
  // ELEMENTOS
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  
  // MENSAGEM INICIAL
  addMessage('🤖 Olá! Sou o assistente da Vaply. Posso tirar dúvidas sobre preço, prazo, WhatsApp, PIX, etc. O que deseja saber?', 'bot');
  
  // ADICIONAR MENSAGEM
  function addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `mb-2 ${sender === 'user' ? 'text-end' : 'text-start'}`;
    div.innerHTML = `<span class="badge ${sender === 'user' ? 'bg-primary' : 'bg-secondary'}">${text}</span>`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  // ENVIO
  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
  
    // PROCURAR RESPOSTA
    const found = faq.find(item => item.keywords.some(k => text.toLowerCase().includes(k)));
    if (found) {
      setTimeout(() => addMessage(found.answer, 'bot'), 600);
      // OFERECER CONTATO
      setTimeout(() => {
        addMessage('📞 Quer conversar comigo agora? Me chama no WhatsApp: (27) 99968-3913', 'bot');
      }, 1500);
    } else {
      setTimeout(() => {
        addMessage('🤔 Pergunta boa! Vou te passar para o especialista. Me chama no WhatsApp: (27) 99968-3913', 'bot');
      }, 600);
    }
  }
  
  // ENTER NO INPUT
  chatInput.addEventListener('keypress', e => e.key === 'Enter' && sendMessage());