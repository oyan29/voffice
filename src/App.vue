<template>
    <v-app>
        <!-- ナビゲーションサイドメニュー -->
        <v-navigation-drawer app clipped v-model="drawer">
            <v-container>
                <!-- <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title grey--text text--darken-2">Navigation lists</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>-->

                <v-list-item>
                    <v-list-item-avatar>
                        <img v-if="userPhotoURL" :src="userPhotoURL" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ userDisplayName }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense nav>
                    <v-list-item v-for="nav_list in navLists" :key="nav_list.name">
                        <v-list-item-icon>
                            <v-icon>{{ nav_list.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-navigation-drawer>

        <!-- ヘッダーバー -->
        <v-app-bar app color="primary" dark clipped-left>
            <!-- ハンバーガアイコン -->
            <v-app-bar-nav-icon v-show="isSignin" @click="fnToggleDrawer"></v-app-bar-nav-icon>

            <!-- タイトル -->
            <v-toolbar-title>ディープラーニングのテスト</v-toolbar-title>

            <!-- 次の要素までに隙間を挿入する -->
            <v-spacer></v-spacer>

            <!-- <v-toolbar-items> -->
            <!-- ボタン -->
            <v-btn outlined @click="fnLoginout">{{ txtSingin }}</v-btn>
            <!-- </v-toolbar-items> -->
        </v-app-bar>

        <!-- コンテンツ領域 -->
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { auth, authObject } from '@/scripts/firebase';

@Component({
    components: {},
})
export default class App extends Vue {
    public userDisplayName: null | string;
    public userPhotoURL: null | string;
    public isSignin: boolean;
    public drawer: null | boolean;
    public txtSingin: null | string;
    public navLists: { name: string; icon: string }[] = [
        { name: '手書き文字', icon: 'mdi-vuetify' },
        { name: '工事中', icon: 'mdi-cogs' },
        { name: '工事中', icon: 'mdi-palette' },
        { name: '工事中', icon: 'mdi-view-dashboard' },
        { name: '工事中', icon: 'mdi-function' },
        { name: '工事中', icon: 'mdi-vuetify' },
    ];

    constructor() {
        super();
        this.userDisplayName = null;
        this.userPhotoURL = null;
        this.isSignin = false;
        this.drawer = false;
        this.txtSingin = '';
    }

    public fnToggleDrawer(): void {
        this.drawer = !this.drawer;
    }

    public fnLoginout(): void {
        if (!this.isSignin) {
            const gap = new authObject.GoogleAuthProvider();
            auth.signInWithRedirect(gap);

            // auth.signInWithPopup(gap)
            //     .then(result => {
            //         // GoogleプロパイダのOAuthトークンを取得します。
            //         const token: any = result.credential.accessToken;
            //         // ログインしたユーザーの情報を取得します。
            //         const user: any = result.user;
            //     })
            //     .catch(function(err) {
            //         console.error(err);
            //         // エラー処理
            //     });
        } else {
            auth.signOut();
        }
    }

    public created(): void {
        auth.onAuthStateChanged(user => {
            // ログイン完了コールバック
            if (user) {
                this.userDisplayName = user.displayName;
                this.userPhotoURL = user.photoURL;
                this.isSignin = true;
                this.txtSingin = 'ログアウト';

                // uid
                //user.uid;
                // 名前
                //user.displayName;
                // プロフィール画像
                //user.photoURL;
                // メール
                //user.email;
                // 認証済みのメールアドレス化
                //user.emailVerified;
                // 電話番号
                //user.phoneNumber;
                // 匿名認証かどうか
                //user.isAnonymous;
            }
            // ログアウト完了コールバック
            else {
                this.userDisplayName = null;
                this.userPhotoURL = null;
                this.isSignin = false;
                this.txtSingin = 'ログイン';
                this.drawer = false;
            }
        });
    }
}
</script>
