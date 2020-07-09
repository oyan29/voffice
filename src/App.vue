<template>
    <v-app>
        <!-- ナビゲーションサイドメニュー -->
        <v-navigation-drawer app clipped v-model="drawer">
            <v-container>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title grey--text text--darken-2">Navigation lists</v-list-item-title>
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
            <v-app-bar-nav-icon @click="fnToggleDrawer"></v-app-bar-nav-icon>
            <!-- タイトル -->
            <v-toolbar-title>ディープラーニングのテスト</v-toolbar-title>

            <!-- 次の要素までに隙間を挿入する -->
            <v-spacer></v-spacer>

            <!-- <v-toolbar-items> -->
            <!-- ボタン -->
            <v-btn outlined @click="fnLogout">{{ txtSingin }}</v-btn>
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
    public drawer: null | boolean = null;
    public txtSingin: null | string = 'ログイン';
    public navLists: { name: string; icon: string }[] = [
        { name: 'Getting Started', icon: 'mdi-vuetify' },
        { name: 'Customization', icon: 'mdi-cogs' },
        { name: 'Styles & animations', icon: 'mdi-palette' },
        { name: 'UI Components', icon: 'mdi-view-dashboard' },
        { name: 'Directives', icon: 'mdi-function' },
        { name: 'Preminum themes', icon: 'mdi-vuetify' },
    ];

    public fnToggleDrawer(): void {
        this.drawer = !this.drawer;
    }

    public fnLogout(): void {
        const gap = new authObject.GoogleAuthProvider();
        auth.signInWithRedirect(gap);
    }

    public created(): void {
        auth.onAuthStateChanged(user => {
            // ログイン完了コールバック
            if (user) {
                this.txtSingin = 'ログアウト';
            }
            // ログアウト完了コールバック
            else {
                this.txtSingin = 'ログイン';
            }
        });
    }
}
</script>
