import { AppRoutingModule } from "./app-ruting.module";

describe("AppRoutingModule", () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it("should create an instance", () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
