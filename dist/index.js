import { NativeModules } from 'react-native';
const LPBridge = NativeModules.RNLeanplum || {};
export default class RNLeanplum {
    constructor(appId, key) {
        this.appId = appId;
        this.key = key;
    }
    start() {
        LPBridge.start && LPBridge.start();
    }
    setAppIdDevelopmentKey() {
        LPBridge.setAppIdDevelopmentKey(this.appId, this.key);
    }
    setAppIdProductionKey() {
        LPBridge.setAppIdProductionKey(this.appId, this.key);
    }
    setDeviceId(deviceId) {
        LPBridge.setDeviceId && LPBridge.setDeviceId(deviceId);
    }
    setUserId(userId) {
        LPBridge.setUserId && LPBridge.setUserId(userId);
    }
    // States
    trackAllAppScreens() {
        LPBridge.trackAllAppScreens && LPBridge.trackAllAppScreens();
    }
    pauseState() {
        LPBridge.pauseState && LPBridge.pauseState();
    }
    resumeState() {
        LPBridge.resumeState && LPBridge.resumeState();
    }
    advanceTo(level, info, parameters) {
        if (info && parameters) {
            LPBridge.advanceToLevelInfoParameters &&
                LPBridge.advanceToLevelInfoParameters(level, info, parameters);
        }
        else if (info) {
            LPBridge.advanceToLevelInfo && LPBridge.advanceToLevelInfo(level, info);
        }
        else if (parameters) {
            LPBridge.advanceToLevelParameters &&
                LPBridge.advanceToLevelParameters(level, parameters);
        }
        else {
            LPBridge.advanceToLevel && LPBridge.advanceToLevel(level);
        }
    }
    // Events
    trackInAppPurchases() {
        LPBridge.trackInAppPurchases && LPBridge.trackInAppPurchases();
    }
    track(event, value, info, parameters) {
        if (event && value && info && parameters) {
            LPBridge.trackEventValueInfoParameters &&
                LPBridge.trackEventValueInfoParameters(event, value, info, parameters);
        }
        else if (event && value && parameters) {
            LPBridge.trackEventValueParameters &&
                LPBridge.trackEventValueParameters(event, value, parameters);
        }
        else if (event && value && info) {
            LPBridge.trackEventValueInfo &&
                LPBridge.trackEventValueInfo(event, value, info);
        }
        else if (event && parameters) {
            LPBridge.trackEventParameters &&
                LPBridge.trackEventParameters(event, parameters);
        }
        else if (event && info) {
            LPBridge.trackEventInfo && LPBridge.trackEventInfo(event, info);
        }
        else if (event && value) {
            LPBridge.trackEventValue && LPBridge.trackEventValue(event, value);
        }
        else {
            LPBridge.trackEvent && LPBridge.trackEvent(event);
        }
    }
    inboxMessages() {
        if (LPBridge.inboxMessages) {
            return LPBridge.inboxMessages();
        }
        else {
            return Promise.resolve(null);
        }
    }
    readMessage(id) {
        if (LPBridge.readMessage) {
            LPBridge.readMessage(id);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztBQUVoRCxNQUFNLENBQUMsT0FBTztJQUlaLFlBQVksS0FBYSxFQUFFLEdBQVc7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUs7UUFDSCxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsc0JBQXNCO1FBQ3BCLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QscUJBQXFCO1FBQ25CLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFFBQWdCO1FBQzFCLFFBQVEsQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsUUFBUSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxTQUFTO0lBQ1Qsa0JBQWtCO1FBQ2hCLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsVUFBVTtRQUNSLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFD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