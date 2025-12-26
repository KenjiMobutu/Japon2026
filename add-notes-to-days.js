// Script pour générer le HTML des notes et boutons pour J2-J10

const days = [
  { num: 2, title: "Traditionnel", date: "Jeudi 13 Mars", city: "Tokyo" },
  { num: 3, title: "Tech & Art", date: "Vendredi 14 Mars", city: "Tokyo" },
  { num: 4, title: "Exploration", date: "Samedi 15 Mars", city: "Tokyo" },
  { num: 5, title: "Shinkansen", date: "Dimanche 16 Mars", city: "Tokyo/Kyoto" },
  { num: 6, title: "Temples Nord", date: "Lundi 17 Mars", city: "Kyoto" },
  { num: 7, title: "Culture & Thé", date: "Mardi 18 Mars", city: "Kyoto" },
  { num: 8, title: "Excursion Nara", date: "Mercredi 19 Mars", city: "Kyoto/Nara" },
  { num: 9, title: "Universal", date: "Jeudi 20 Mars", city: "Osaka" },
  { num: 10, title: "Départ", date: "Vendredi 21 Mars", city: "Osaka" }
];

days.forEach(day => {
  console.log(`\n<!-- Pour Jour ${day.num} -->`);
  console.log(`Ajouter dans le .day-header-v2 AVANT la fermeture :</div>:`);
  console.log(`                    <button class="day-complete-btn" onclick="toggleDayComplete(${day.num})" title="Marquer comme accompli">`);
  console.log(`                        <span class="check-icon">✓</span>`);
  console.log(`                    </button>`);
  console.log(`\nAjouter APRÈS le .day-header-v2 et AVANT la .timeline:`);
  console.log(`                <!-- Zone de notes -->`);
  console.log(`                <div class="day-notes">`);
  console.log(`                    <textarea`);
  console.log(`                        id="note-day-${day.num}"`);
  console.log(`                        placeholder="✍️ Mes notes pour ce jour..."`);
  console.log(`                        onblur="saveNote(${day.num})"`);
  console.log(`                        rows="2"></textarea>`);
  console.log(`                </div>\n`);
});
