var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲:\xa0 https://mdecp2024.github.io/hw-zxc41323234/content/index.html \n 個人網站:  https://github.com/mdecp2024/hw-zxc41323234 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n \n \n \n \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n 每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n 以下影片說明如何在作業網站加入Bython，同時練習print與for迴圈的用法 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '\n', 'tags': '', 'url': 'w10.html'}, {'title': 'w12_hw', 'text': "第一題:Text, questions, and art (文字、問題和藝術) \n 說明:Strings, input(), and print() (字串、input()和print()) \n input()程式範例: What's your name? \n print()範例程式： 貓貓 \n 第二題：變數 \n Q2-1範例程式： 姓名 \n Q2-2範例程式： 名字和喜歡的食物 \n 第三題：if判斷式 \n Q3範例程式： book store \n 第四題：append()和remove() \n Q4範例程式： 購物清單 \n 第五題: index().pop()和insert() \n 菜單 \n 第六題: 切片取值 \n city \n \n", 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '12/4 \n 一個格子 \n 兩個格子 \n 圓形重疊 \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '課堂作業 \n from browser import html\nfrom browser import document as doc\nimport random\n \n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]  # 獲取指定 id 的 div 元素\n    brython_div <= canvas  # 將 canvas 插入到該 div 中\n    ctx = canvas.getContext("2d")\n    return canvas, ctx\n \n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    """\n    生成一個隨機的 RGB 顏色字符串。\n    返回的顏色是 "rgb(r, g, b)" 格式，其中 r, g, b 是 0 到 255 之間的隨機整數。\n    """\n    r = random.randint(0, 255)  # 隨機生成紅色成分 (0-255)\n    g = random.randint(0, 255)  # 隨機生成綠色成分 (0-255)\n    b = random.randint(0, 255)  # 隨機生成藍色成分 (0-255)\n    return f"rgb({r}, {g}, {b})"  # 返回隨機顏色字符串\n \n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    """\n    判斷一個點 (px, py) 是否位於圓 (cx, cy, r) 內。\n    (cx, cy) 為圓心坐標，r 為圓的半徑。\n    """\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n \n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    """\n    根據傳入的三個圓的圓心和半徑，繪製圓形並使用掃描線算法填充區域。\n    x1, y1, r1 是圓1的圓心坐標和半徑\n    x2, y2, r2 是圓2的圓心坐標和半徑\n    x3, y3, r3 是圓3的圓心坐標和半徑\n    """\n    canvas, ctx = initialize_canvas(400, 400)\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    color_dict = {}\n \n    for py in range(0, canvas.height):  # 遍歷每一行的 y 坐標\n        current_color = None \n        for px in range(0, canvas.width):  # 遍歷每一列的 x 坐標\n            # 判斷該點是否在圓1內\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            # 判斷該點是否在圓2內\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            # 判斷該點是否在圓3內\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n \n            if in_circle1 and in_circle2 and in_circle3:\n                # 如果點同時在三個圓內，則是三圓交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 如果點在圓1和圓2的交集區域\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle1 and in_circle3:\n                # 如果點在圓1和圓3的交集區域\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle2 and in_circle3:\n                # 如果點在圓2和圓3的交集區域\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1:\n                # 如果點只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 如果點只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 如果點只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 如果點不在任何圓內，則是背景區域\n                current_color = "white"  # 背景色設為白色\n \n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n \n# 設定三個圓的圓心座標和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100  # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 200, 100, 100  # 圓3：圓心 (200, 100)，半徑 100\n \n# 呼叫畫圓函式，並繪製三個圓\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3) \n \n 請根據兩個圓繪圖所圍成的區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各 區域 的著色任務. \n Ans', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '題目一 :從1加到100 \n 題目二 :addto \n 題目三 :oniy even \n 題目四 :avoid 8 \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': 'exam2 \n \n \n  导入 brython 程序库  \n \n \n \n \n  启动 Brython  \n \n \n  修改 Canvas 的大小，确保它适合绘制图形    \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w6', 'text': "#help(range)\nfor i in range(1,5):\n    print(i)\ndef print_star_pyramid(rows):\n    for i in range(rows):\n        # 打印空格\n        print(' ' * (rows - i - 1), end='')\n        # 打印星星\n        print('*' * (2 * i + 1))\n# 設定金字塔的行數\nrows = 0\nprint_number_pyramid(rows) \n     *\n   ***\n  *****\n *******\n*********\n \n \n", 'tags': '', 'url': 'w6.html'}, {'title': 'w16_exam2', 'text': 'exam3 \n \n  导入 brython 程序库  \n \n \n \n \n  启动 Brython  \n \n \n  创建一个容器用于插入画布  \n \n  创建并设置 Canvas    \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'w11_hw', 'text': '第一題: 圓形區域 \n 第二題: 數字列 \n \xa0 \xa0 \xa0 \xa0 \xa0  格子練習 \n \n 影片 \n \n 心得 \n 這是我第一次使用 Brython讓 Python 可以在瀏覽器中執行的工具。在過去，我更多的是在本地環境使用 Python，但現在我學會了如何將它應用到網頁開發中。利用  canvas  API 繪製圖形是一個新的挑戰，特別是在設定畫布的大小、繪製方格和填充顏色方面 \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '\n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'w16_exam3', 'text': 'exam4 \n \n \n  导入 brython 程序库  \n \n \n  启动 Brython  \n \n  创建一个容器用于插入画布  \n \n  创建并设置 Canvas  \n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};