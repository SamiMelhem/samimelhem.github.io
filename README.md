# Projects Tips:
  MAKE ALL PROJECTS LOOK GOOD
  USE REAL-TIME SCENARIOS FOR API DATA GRABS

# Datasets
  kaggle -> Original & Interesting, Data on something your are interested in
  awesome public datasets on GitHub
  You can also use APIs to collect data
  Create your own custom dataset -> Google Activity Data from takeout.google.com, Managing your finances via your bank stats, web scraping is not recommended but fine

# Technologies/Concepts/Skills
Python -> Syntax
  Libraries: NumPy, Pandas, Matplotlib, Seaborn
Math & Stats
  Basics: Descriptive vs inferential statistics, continuous vs discrete data, nomial vs ordinal data
  Basic plots: Histograms, pie charts, bar charts, scatter plot, etc.
  Measures of central tendency: mean, median, mode
  Measures of dispersion: variance, standard deviation
  Probability basics
  Distributions: Normal distribution
  Correlation and covariance
  Central Limit Theorem
  Hypothesis Testing: p value, confidence interval, type 1 vs type 2 error, Z test, t test, ANOVA 
  *Resources for Learning: Khan Academy Stats & Probability Course, StatQuest with Josh Starmer YT Channel, and codebasics "Mathematics, Statistics for DS & ML"*
Exploratory Data Analysis (EDA)
  Practice EDA with at least 3 datasets, with 2 additional datasets by yourself
SQL
  Relational Databases
  Basic Queries: SELECT, WHERE LIKE, DISTINCT, BETWEEN, GROUP BY, ORDER BY
  Advance Queries: CTE, Subqueries, Window Functions
  Joins: Left, Right, Inner, Full
Machine Learning
  Preprocessing
    Handling NA values, outlier treatment, data normalization
    One hot encoding, label encoding
    Feature engineering
    Train test split
    Cross validation
  Model Building
    Types of ML: Supervised, Unsupervised
    Supervised: Regression vs Classification
    Linear models: Linear regression, logisitic regression, gradient descent
    Non-linear models (tree-based models): Decision tree, Random forest, XGBoost
    Model evaluation:
      Regression: Mean Squared Error, Mean Absolute Error, MAPE
      Classification: Accuracy, Precision-Recall, F1 Score, ROC Curve, Confusion matrix
    Hyperparameter tunning: GridSearchCV, RandomSearchCV
    Unsupervised: K means, hierarchical clustering, Dimensionally reduction (PCA)
  *Resources for Learning: Machine Learning Tutorial Python by codebasics, Feature Engineering Tutorial Python by codebasics*
  *Scrum Training Series & Kanban, with tools of JIRA and Notion*
Machine Learning Projects with Deployment
  Regression Project: Dallas property price prediction (https://bit.ly/3ivycWr)
    Data Cleaning, Feature Engineering, Model Building & hyper parameter tuning, Write flask server as web backend, building website for price prediction, & AWS deployment 
  Classification Project: Sports celebrity image classification (https://bit.ly/3ioaMSU)
    Data Collection and data cleaning, feature engineering and model training, flask server as a web backend, building website and deployment
Better regression and Classification Projects:
  Use FASTAPI instead of Flask
  Regression Project: Find one of interest on Kaggle
  Classification Project: Find one of interest on Kaggle and build end to end solution along with deployment to AWS or Azure
Deep Learning
  Neural Network -> Forward propagation, back propagation
  Building multilayer perceptron
  Special neural network architectures
    Convolutional neural network (CNN)
    Sequence models: RNN, LSTM
  Deep Learning via Tensorflow and PyTorch from codebasics
  End to end potato disease classification project
NLP or Computer Vision
  NLP
    Regex
    Text presentation: Count vectorizer, TF-IDF, BOW, Word2Vec, Embeddings
    Text classification: Naive Bayes
    Fundamentals of Spacy & NLTP library
    One end to end project
    NLP YT Playlist from codebasics
  Computer Vision
    Basic image processing techniques: Filtering, Edge Detection, Image Scaling, Rotation
    OpenCV library
    Convolutional Neural Networks (CNN): *Already covered in deep learning*
    Data preprocessing, augmentation: *Already covered in deep learning*
Onwards
  More projects
  Online brand building through LinkedIn, Kaggle, Discord, Opensoure contribution
  Job Application and Success
    
    

# Project 1: Data Cleaning & Transformation
Option 1: FIFA players dataset
  Python or Excel
  Do the height and weight columns have the appropriate data types?
  Can you separate the joined column into year, month and day columns?
  Can you clean and transform the value, wage and release clause columns into columns of integers?
  How can you remove the newline characters from the Hits column?
  Should you separate the Team & Contract column into separate team and contract columns?

Option 2: Data Science job postings on Glassdoor
  Python or Excel
  Can you make the salary column into integers?
  What information can you extract out of job descriptions?
  How can you remove the numbers from the company name?
  How can you create some new features? (e.g. stat column from the location column)
  
# Project 2: Data Analysis
Option 1: Stack Overflow annual developer survey
  Python  
  At what companies do developers get paid the most?
  How much does remote working matter to employees?
  How does coding experience affect the level of pay?
  What's the most popular method of learning to code?
  Are you more likely to get a job as a developer if you have a master's degree?

Option 2: Own YouTube Watch History
  Python (BeautifulSoup + NLTK)
  What were your most watched videos?
  Are there any recurring topics / keywords in the titles of the videos you've watched?
  During what days / which hours were you watching the most content on YouTube?

# Project 3: Data Visualization
Potential Project - Live trends of companies and the likelihood of getting into a company with certain attributes
 
Option 1: London bike sharing dataset
  Tableau or Power BI
  How does weather affect bike usage?
  What's the total bike rides between specific periods?
  What's the 2-week moving average? (7-day / 30-day moving average?)
  How can you make your visuals more dynamic and more user-friendly?

Option 2: Own bank statements
  Tableau or Power BI
  Are there certain days / weeks / moths when you spend more? If so, why?
  What are your most recurring purchases?
  Are there any unnecessary items you've spent on?
  Are there any outliers in your spending pattern?

# Project 4: Data Engineering / Data Science
Option 1: DE - ETL pipeline + data modeling
US Traffic Accidents - Python + Airflow (for automation)
What should you include in the fact table?
What should you include in the dimension tables?
How best to build the ETL pipeline?
Would your method for the ETL pipeline still work if your data grew by 10x / 100x / 10,000x?

Option 2: DS - Machine Learning
Credit Card Approval Prediction - Python (sklearn)
The data is very unbalanced. How can you overcome this problem?
How do you define if a customer is good or bad?
How do you build a machine learning model that predicts if the applicant is good or bad?

# Project 5: Communication
Option 1: Blog Post on Medium
Option 2: Your own website (featuring that blog post)
