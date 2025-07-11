class StackImp:
    def __init__(self):
        self.li=[]
        
    def push(self,val):
        self.li.append(val)
    def pop(self):
        if(len(self.li)==0):
            return "its empty"
        return self.li.pop()
        
    def size(self):
        return len(self.li)
    def top(self):
        return self.li[-1]
        
        
class QueueImp:
    
    def __init__(self):
        self.li=[]
    def push(self,val):
        self.li.append(val)
    def pop(self):
        if(len(self.li)>0):
            return self.li.pop(0)
        return "q is empty"
    def size(self):
        return len(self.li)
    def top(self):
        if len(self.li) > 0:
            return self.li[0]
        return "Queue is empty"
