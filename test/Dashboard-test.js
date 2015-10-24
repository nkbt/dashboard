describe('Dashboard', () => {
  const DashboardInjector = require('inject!../src/Dashboard');
  let mock, Dashboard;


  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['']);
  });


  beforeEach(() => Dashboard = DashboardInjector({
    mock
  }));


  it('should be ok', () => {
    expect(Dashboard).toBeTruthy();
  });
});
