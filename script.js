  function updateYearLine() {
    const currentYear = new Date().getFullYear();
    document.getElementById('yearLine').textContent = `${currentYear} это очередной год команда победы :3`;
    
    document.getElementById('explanation').textContent = 
      `Почему ${currentYear} это очередной год команда победы?`;
  }

  const startDate = new Date('2026-03-1T00:00:00Z').getTime();
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;

  function updateTimerLine() {
    const now = Date.now();
    const diffMs = now - startDate;
    const years = diffMs / msInYear;
    document.getElementById('timerLine').textContent = `команда победа уже ${years.toFixed(14)} лет!`;
  }
  
  updateYearLine();
  updateTimerLine();
  setInterval(updateTimerLine, 10);
