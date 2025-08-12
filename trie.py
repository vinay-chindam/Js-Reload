       
        
        
class TrieNode:
    def __init__(self):
        self.children=[None]*(26)
        self.isEnd=False
    
        
        
class Trie:
    def __init__(self):
        self.root=TrieNode()
        
    def sayIndex(self,ch):
        return ord(ch)-ord('a')
    
    def insert(self,word):
        temp=self.root
        for ch in word:
            ind=self.sayIndex(ch)
            if(temp.children[ind]==None):
                temp.children[ind]=TrieNode()
            temp=temp.children[ind]
        temp.isEnd=True
    def search(self,word):
        
        temp=self.root
        for ch in word:
            ind=self.sayIndex(ch)
            if(temp.children[ind]==None):
                return False
            temp=temp.children[ind]
        return temp.isEnd
    
    def startswith(self,word):
        temp=self.root
        for ch in word:
            ind=self.sayIndex(ch)
            if(temp.children[ind]==None):
                return False
            temp=temp.children[ind]
        return True
            
                
        
        
        
trie = Trie()
trie.insert("code")
trie.insert("coder")
trie.insert("codingn")

print(trie.search("codes"))
print(trie.search("codm"))
print(trie.startswith("codx"))
print(trie.search("coding"))    

print(trie)

        
        
        
