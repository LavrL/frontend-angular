import { ProfileTabComponent } from './profile-tab.component';

describe('ProfileTabComponent', () => {
  let profileTab: ProfileTabComponent;
  let addAddressClicked = false;
  let open = false;

  beforeEach(() => {
    profileTab = new ProfileTabComponent();
  });

  it('should change div size to true/false', () => {
    profileTab.changeDivSize();

    expect(profileTab.height).toEqual(400);
    expect(profileTab.width).toEqual(600);
    expect(profileTab.open).toBe(true);
    expect(profileTab.full).toBe(true);

    profileTab.changeDivSize();

    expect(profileTab.height).toEqual(100);
    expect(profileTab.width).toEqual(600);
    expect(profileTab.open).toBe(false);
    expect(profileTab.full).toBe(false);
  })

  it('should change addAddressClicked to true/false', () => {
    profileTab.addAddress();
    expect(profileTab.addAddressClicked).toBe(true);

    profileTab.addAddress();
    expect(profileTab.addAddressClicked).toBe(false);
  });

});

