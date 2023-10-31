class Helper:
    __menu_map = ("DUMMY", "bWeak", "bMedium", "bStrong", 
                    "abWeak", "abMedium", "abStrong", 
                    "arWeak", "arMedium", "arStrong",
                    "cWeak", "cMedium", "cStrong", 
                    "lWeak", "lMedium", "lStrong", 
                    "sWeak", "sMedium", "sStrong")
    
    def __init__():
        pass

    @staticmethod
    def get_menu_index_from_menu_id(menu_id):
        
        if menu_id in Helper.__menu_map:
            return Helper.__menu_map.index(menu_id)
        return -1
    
    @staticmethod
    def toggle_from_menu_index(pre_str, index):
        string_list = list(pre_str)
        string_list[index] = Helper.toggled(string_list[index])
        return ''.join(string_list)
    
    @staticmethod
    def add_from_menu_index(pre_str, index):
        string_list = list(pre_str)
        string_list[index] = '1'
        return ''.join(string_list)
    
    @staticmethod
    def delete_from_menu_index(pre_str, index):
        string_list = list(pre_str)
        string_list[index] = '0'
        return ''.join(string_list)
    
    @staticmethod
    def toggled(char):
        return '0' if char == '1' else '1'
    
    @staticmethod
    def parse_preference_string(pre_str):
        return [Helper.__menu_map[i] for i, c in enumerate(pre_str) if c == '1']

if __name__ == '__main__':
    pass