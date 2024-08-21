const math = require('mathjs');
const readlineSync = require('readline-sync');

function normalizeExpression(expression) {
    return expression.replace(/\./g, '*');
}
 // O(n) kullanıcı veri girdikçe artış olur tc // O(n) kullanıcı veri girdikçe bellek kaplaması artar sc
function evaluateExpression(expression) {
    try {
        const normalizedExpression = normalizeExpression(expression);
        return math.evaluate(normalizedExpression);
    } catch (error) {
        return `Hata: Geçersiz matematiksel ifade.`;
    }
}
// O(n)+O(1)=O(n) tc //O(n)+O(1)=O(n) sc     
function calculate() {
 // O(1) sabit veri girişi tc // O(1) sabit bellek kaplaması sc   
    const input = readlineSync.question('Hesaplama yapmak için bir ifade girin: ');
 // O(n) kullanıcı veri girdikçe artış olur tc // O(n) kullanıcı veri girdikçe bellek kaplaması artar sc
    if (!input || /[^0-9()+\-*/.^cos\sin\tan\log\s]/.test(input)) {
        return 'Hata: Lütfen sayı ve işlemi yapmak istediğiniz işlemi yapınız (yazı yazmayın!)';
    }

    return evaluateExpression(input);
}
// O(n)+O(1)+O(1)=O(n) tc //O(n)+O(1)+O(1)=O(n) sc  
while (true) {
// O(n) kullanıcı veri girdikçe artış olur tc // O(n) kullanıcı veri girdikçe bellek kaplaması artar sc
    const result = calculate();
// O(1) sabit veri girişi tc // O(1) sabit bellek kaplaması sc  
    console.log(`Sonuç: ${result}`);
// O(1) sabit veri girişi tc // O(1) sabit bellek kaplaması sc
    const again = readlineSync.question('Başka bir işlem yapmak ister misiniz? (e/h): ');
    if (again.toLowerCase() !== 'e') break;
}
// O(1) sabit veri girişi tc // O(1) sabit bellek kaplaması sc
console.log('Hesap makinesi kapatıldı.');

// O(n)+O(n)+O(n)+O(1)=O(n) time complexity'si O(n)'dir veri girişine bağlı olarak süresi artar.
//O(n)+O(n)+O(n)+O(1)=O(n) space complexity'si O(n)'dir veri girişine bağlı olarak bellek kullanımı artar.