<h1><center>Git and GitHub

好的，根據您提供的來源和我們之前的對話，以下列出常用的 Git 和 GitHub 指令，並加上說明，方便您理解和使用：

### Git 指令

- **git init**：
- 這個指令會在當前目錄建立一個隱藏的 .git 子資料夾，用來儲存檔案變更的歷史 [1]。
- **將現有的資料夾轉換為 Git 儲存庫**，開始追蹤檔案變更 [1]。
- **git status**：
- **檢查目前 Git 管理的目錄內檔案是否有變動** [2]。
- 可以查看哪些檔案處於未追蹤 (untracked)、已修改 (modified)、已加入暫存 (staged) 等狀態 [2, 3]。
- 會顯示目前所在的分支，以及與遠端分支的關係 [2]。
- **git add**：
- **將檔案的變更加入到暫存區 (staging area)** [4, 5]。
- git add [檔案名稱]：將指定檔案加入暫存區 [5]。
- git add . 或 git add *：將目前目錄下所有變更的檔案加入暫存區 [6, 7]。
- 在 Git 中，必須先將檔案加入暫存區，才能將其變更提交 (commit) [8]。
- 這個指令用於追蹤檔案的「變化」而非檔案本身 [9]。
- **git commit**：
- **將暫存區的變更儲存到本地儲存庫 (local repository)** [4, 6]。
- git commit -m "提交訊息"：**提交變更並附帶簡短的訊息** [6, 8]。
- 提交訊息可以幫助日後快速了解每次提交的目的和內容變化 [8]。
- **git log**：
- **查看過往的提交 (commit) 紀錄** [2, 7]。
- git log：詳細列出所有提交紀錄，包含提交者、日期、提交訊息等 [2]。
- git log --oneline：以簡潔的一行顯示提交紀錄，包含 commit ID 和訊息 [2, 10]。
- **git diff**：
- **比較檔案之間的差異** [2]。
- git diff：比較工作區 (workspace) 和暫存區 (staging area) 的差異 [2]。
- git diff [檔案名稱]：比較指定檔案在工作區和暫存區的差異 [11]。
- git diff [commit ID]：比較工作區與特定 commit 的差異 [10, 11]。
- git diff [commitA ID] [commitB ID]：比較兩個 commit 之間的差異 [11]。
- **git clone [repository url]**：
- **從遠端儲存庫 (remote repository) 下載專案**到本地端 [5, 11, 12]。
- 用於開始專案開發，或複製其他人的專案 [5]。
- **git pull**：
- **從遠端儲存庫 (remote repository) 更新本地的檔案**，使其與遠端儲存庫同步 [5, 12, 13]。
- 相當於 git fetch + git merge [5]。
- **git push**：
- **將本地儲存庫 (local repository) 的變更上傳到遠端儲存庫 (remote repository)**，如 GitHub、GitLab 等 [4, 6, 12, 13]。
- git push：將本地變更推送到預設的遠端儲存庫 [6]。
- git push [remote repository URL]：將本地變更推送到指定的遠端儲存庫 [14]。
- **git checkout**：
- git checkout [commit ID] [檔案名稱]: **還原檔案到特定 commit 的版本** [10]。
- git checkout [分支名稱]：**移動 HEAD 到指定的分支，並檢視該分支** [14]。
- git checkout -b [分支名稱]：**建立新的分支並切換到該分支** [12, 15]。
- **git reset --hard [commit ID]**：**將所有檔案還原到特定 commit 的版本**，且捨棄之後的 commit 紀錄 (此操作不可逆，請謹慎使用) [9]。
- **git branch**:
- git branch : **顯示目前分支列表** [14]。
- git branch [branch名稱]: **建立分支** [14]。
- git branch -d [branch名稱]: **刪除分支** [14]。
- **git merge [branch名稱]**：將指定的分支合併到目前所在的分支 [14]。

### GitHub 相關指令和概念

- **遠端儲存庫 (Remote Repository)**：
- **GitHub、GitLab 等網站提供的網路儲存空間**，用於存放程式碼，讓使用者隨時透過網路存取 [16]。
- 可以與他人協作開發，並備份程式碼 [17]。
- **建立儲存庫 (Create Repository)**：
- 在 GitHub 上建立新的儲存庫，用於存放專案的程式碼 [17]。
- 可以選擇將儲存庫設為公開 (public) 或私人 (private) [17]。
- 建立儲存庫後，GitHub 會提供指令，協助使用者將本地檔案推送到雲端 [18]。
- **協作者 (Collaborators)**：
- 可以邀請其他使用者成為專案的協作者，共同開發 [18]。
- 協作者擁有對專案的存取和修改權 [12]。
- **合併請求 (Pull Request)**：
- **協作者完成編輯後，發起合併請求，通知團隊成員檢視變更** [15]。
- **審核變更後，可以選擇合併或要求修改** [15]。
- **.gitignore**：
- 在專案目錄下建立 .gitignore 檔案，並將不需要追蹤的檔案或目錄名稱寫入，**避免不必要的檔案被提交到儲存庫** [14, 17]。

### 工作流程

1. **初始化 (Initialize)**：使用 git init 將目錄轉換為 Git 儲存庫 [1]。
2. **新增 (Add)**：使用 git add 將檔案變更加入暫存區 [5]。
3. **提交 (Commit)**：使用 git commit 將暫存區的變更儲存到本地儲存庫 [6]。
4. **推送 (Push)**：使用 git push 將本地儲存庫的變更推送到遠端儲存庫 (如 GitHub) [6]。
5. **拉取 (Pull)**：使用 git pull 從遠端儲存庫更新本地的變更 [5, 13]。
6. **分支 (Branch)**：使用 git branch 建立分支，git checkout 切換分支，git merge 合併分支 [14]。

希望這些資訊對您有所幫助。如果您有其他問題，請隨時提出。





https://github.com/boyprince03/codingLearning.git



git@github.com:boyprince03/codingLearning.git



### …or create a new repository on the command line



```
echo "# codingLearning" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/boyprince03/codingLearning.git
git push -u origin main
```

### …or push an existing repository from the command line



```
git remote add origin https://github.com/boyprince03/codingLearning.git
git branch -M main
git push -u origin main
```