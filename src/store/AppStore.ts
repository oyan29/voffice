import Vue from 'vue';

class AppStore {
    // state
    private _toolbar_title: string;
    private _signin: boolean;
    private _display_name: string | null;
    private _user_photo_url: string | null;

    constructor() {
        this._toolbar_title = '';
        this._signin = false;
        this._display_name = '';
        this._user_photo_url = '';
    }

    // getters
    public get Signin() {
        return this._signin;
    }
    public get DisplayName() {
        return this._display_name;
    }
    public get UserPhotoURL() {
        return this._user_photo_url;
    }
    public get toolbar_title() {
        return this._toolbar_title;
    }
    public get login_logout_txt() {
        let wk: string;
        wk = this._signin ? 'ログアウト' : 'ログイン';
        return wk;
    }

    // mutations
    public set toolbar_title(title: string) {
        this._toolbar_title = title;
    }

    // actions
    public SetToolbarTitle(title: string) {
        this._toolbar_title = title;
    }

    public ClearUserInfo() {
        this._signin = false;
        this._display_name = '';
        this._user_photo_url = '';
    }

    public SetUserInfo(displayName: string | null, userPhotoURL: string | null) {
        this._signin = true;
        this._display_name = displayName;
        this._user_photo_url = userPhotoURL;
    }
}

export default Vue.observable(new AppStore());
