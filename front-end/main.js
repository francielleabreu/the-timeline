function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
  
    if (!message) {
      alert('Please enter a message');
      return;
    }
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/messages', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('Message sent successfully');
          messageInput.value = '';
          loadMessages();
        } else {
          try {
            const data = JSON.parse(xhr.responseText);
            alert(`Error: ${data.error}`);
          } catch (error) {
            alert('Something went wrong');
          }
        }
      }
    };
  
    const data = JSON.stringify({ message });
    xhr.send(data);
  }

  async function loadMessages() {
    const messageList = document.getElementById('messageList');

    try {
      const response = await fetch('http://localhost:3000/api/messages');
      const messages = await response.json();

      messageList.innerHTML = '';

      messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'alert alert-info';
        messageDiv.innerHTML = `<strong>${new Date(message.timestamp).toLocaleString()}</strong><br>${message.message}`;
        messageList.appendChild(messageDiv);
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to load messages');
    }
  }

loadMessages();